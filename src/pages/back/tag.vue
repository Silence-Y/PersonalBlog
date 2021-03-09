<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 标签
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 表格内容 -->
    <div class="container">
      <div class="handle-box">
        <el-button
          type="primary"
          icon="el-icon-delete"
          class="handle-del mr10"
          size="small"
          >批量删除</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          size="small"
          @click="handleAdd"
          >新增</el-button
        >
        <el-input
          v-model="query.content"
          size="small"
          placeholder
          class="handle-input mr10"
        ></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
          @click="handleSearch()"
          >搜索</el-button
        >
      </div>

      <!-- 列表页面 -->
      <el-table
        :data="tags"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="t_name" label="内容"></el-table-column>
        <el-table-column
          sortable
          prop="ctime"
          label="创建时间"
        ></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="
                handleEdit(
                  scope.$index,
                  scope.row,
                  scope.row.id,
                  scope.row.ctime
                )
              "
              >编辑</el-button
            >
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页功能 -->
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.currentPage"
          :page-size="query.pageSize"
          :total="query.pageTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 弹窗 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="tagFormVisible"
      top="10vh"
      @close="resetForm('tagForm')"
    >
      <el-form :model="tag">
        <!-- 编辑框 -->
        <el-form-item>
          <quill-editor
            ref="TextEditor"
            v-model="tag.t_name"
            :options="editorOption"
          ></quill-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="tagFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitWord('tagForm', newId)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入富文本编辑器所需样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      // 查询的参数
      query: {
        // 一共有多少页
        pageNum: 1,
        // 实现搜索功能
        t_name: "",
        currentPage: 1,
        // 每页显示10条数据
        pageSize: 10,
        pageTotal: 0,
      },
      // 展示列表页面
      tags: [],
      // 新增或者编辑
      tag: {
        id: "",
        t_name: "",
      },
      newId: "",
      newCtime: "",
      // 是否展示编辑弹出框
      tagFormVisible: false,
      dialogTitle: "",
      rowIndex: 9999,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike", "link"],
            ["image", "clean"],
          ],
        },
        placeholder: "请输入内容...",
        theme: "snow",
      },
    };
  },
  created() {
    this.getTags();
  },
  methods: {
    // 每页限制条数改变时
    handleSizeChange(val) {
      //改变每页显示数量重新请求数据，重置当前页为第一页
      this.query.pageSize = val;
      this.query.currentPage = 1;
      // this.getEveryDays();
    },
    // 分页查询，从第一页变为其他页,获取当前页的页数
    handleCurrentChange(val) {
      this.query.currentPage = val;
      // console.log(this.currentPage);
      this.tags();
    },
    // 获取用户列表数据,分页查询
    getTags() {
      this.loading = true;
      this.$http
        .get("/api/tag", {
          params: {
            page: this.query.currentPage,
            limit: this.query.pageSize,
          },
        })
        .then((res) => {
          // console.log(res.data.data.datas);
          this.tags = res.data.data.datas;
          //   console.log(this.tags);
          this.query.pageTotal = res.data.data.total;
        });
    },

    // 触发搜索按钮
    handleSearch() {
      this.loading = true;
      this.$http
        .get("/api/tag", {
          params: {
            t_name: this.query.t_name,
          },
        })
        .then((res) => {
          this.tags = res.data.data.datas;
          this.query.pageTotal = res.data.data.total;
        });
    },
    // 新增数据
    handleAdd() {
      this.dialogTitle = "新增标签";
      this.tag = Object.assign({}, this.tagBackup);
      this.tagFormVisible = true;
    },

    // 编辑操作
    handleEdit(index, row, id, ctime) {
      console.log(row);
      this.newId = id;
      //   this.newCtime = ctime;
      // console.log(newId);
      this.dialogTitle = "编辑标签";
      // 数据回显
      this.tag = Object.assign({}, this.tag, row);
      this.tagFormVisible = true;
      this.rowIndex = index;
    },
    // 保存提交数据
    submitWord(formName) {
      const id = this.newId;
      // console.log(this.newId);
      this.tag.t_name = this.tag.t_name.replace(/<[^>]+>/g, "");
      // 如果id存在就编辑
      if (id) {
        this.tag.id = this.newId;
        // this.everyDay.ctime = this.newCtime;
        this.$http.put("/api/tag" + `/${id}`, this.tag).then((res) => {
          // 重新获取数据
          this.tags();
        });
      } else {
        // 如果不存在就新增
        // this.tag.ctime = moment().format("YYYY-MM-DD HH:mm:ss");
        this.$http.post("/api/tag", this.tag).then((res) => {
          // console.log(res);
          // 重新获取数据
          this.tags();
        });
      }
      this.tagFormVisible = false;
      this.$message({
        type: "success",
        message: id ? "修改成功" : "新增成功",
      });
    },

    // 删除操作
    handleDelete(id) {
      // 二次确认删除
      this.$confirm(`确定删除吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        // 用户列表里删除数据
        this.$http.delete("/api/tag" + `/${id}`).then((res) => {
          // console.log(res);
          // 重新获取数据
          this.tags();
        });
        this.$message({
          type: "success",
          message: "删除成功",
        });
      });
    },
    resetForm() {},
  },
  components: {
    quillEditor,
  },
};
</script>


<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
  margin-left: 20px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>