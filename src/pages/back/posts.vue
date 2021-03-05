<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 博客列表
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
          v-model="query.title"
          placeholder="博客名称"
          class="handle-input mr10"
          size="small"
        ></el-input>
        <el-select v-model="query.tag" placeholder="请选择">
          <el-option
            v-for="item in tagList"
            :key="item.id"
            :label="item.t_name"
            :value="item.t_name"
          >
          </el-option>
        </el-select>
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
        :data="blogs"
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
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="tag" label="标签"></el-table-column>
        <el-table-column
          sortable
          prop="ctime"
          label="创建日期"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询的参数
      query: {
        // 一共有多少页
        pageNum: 1,
        // 实现搜索功能
        title: "",
        tag: "",
        currentPage: 1,
        // 每页显示10条数据
        pageSize: 10,
        pageTotal: 0,
      },
      blogs: [],
      // 标签选择
      tagList: [],
      // 是否展示编辑弹出框
      userFormVisible: false,
      dialogTitle: "",
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getBlogs();
    this.getTag();
  },
  methods: {
    // 获取标签
    getTag() {
      this.$http.get("/api/tag").then((res) => {
        // console.log(res.data.data.datas);
        this.tagList = res.data.data.datas;
      });
    },
    // 每页限制条数改变时
    handleSizeChange(val) {
      //改变每页显示数量重新请求数据，重置当前页为第一页
      this.query.pageSize = val;
      this.query.currentPage = 1;
      // this.getBlogs();
    },
    // 分页查询，从第一页变为其他页,获取当前页的页数
    handleCurrentChange(val) {
      this.query.currentPage = val;
      // console.log(this.currentPage);
      this.getBlogs();
    },
    // 获取博客列表数据
    getBlogs() {
      this.loading = true;
      this.$http
        .get("/api/blog", {
          params: {
            page: this.query.currentPage,
            limit: this.query.pageSize,
          },
        })
        .then((res) => {
          // console.log(res.data.data.datas);
          this.blogs = res.data.data.datas;
          console.log(this.blogs);
          this.query.pageTotal = res.data.data.total;
        });
    },
    // 触发搜索按钮
    handleSearch() {
      this.loading = true;
      this.$http
        .get("/api/blog", {
          params: {
            title: this.query.title,
            tag: this.query.tag,
          },
        })
        .then((res) => {
          this.blogs = res.data.data.datas;
          this.query.pageTotal = res.data.data.total;
        });
    },
    // 新增数据
    handleAdd() {
      this.$router.push({ path: "editBlog" });
    },

    // 编辑操作
    handleEdit(index, row, id, ctime) {
      this.$router.push({
        path: "editBlog",
        query: { id: id, newCtime: ctime, row: row },
      });
      // console.log(row);
      // 数据回显
      this.blog = Object.assign({}, this.blog, row);
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
        this.$http.delete("/api/blog/" + id).then((res) => {
          // console.log(res);
          // 重新获取数据
          this.getBlogs();
        });
        this.$message({
          type: "success",
          message: "删除成功",
        });
      });
    },
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