<template>
  <Layout>
    <div class="content">
      <div class="card" v-for="edge in $page.allFaker.edges" :key="edge.node.id">
        <div class="card-content">
          <p class="title"> {{ edge.node.author }}</p>
          <p class="subtitle"> <i>Contact Email:</i> {{ edge.node.email }}</p>
          <p class="subtitle"> <i> Profile: </i> {{ edge.node.title }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query allFaker {
  allFaker (perPage: 10) {
    edges {
      node {
        id,
        author,
        thumbnail,
        avatar,
        email,
        content,
        title,
        slug,
        date
      }
    }
  }
}
</page-query>

<script>
export default {
  // ..
};
</script>

<style>
.card {
  border: 2px solid #333;
  margin: 20px;
}
</style>
