<template>
  <div class="site">
    <p>HOME:{{siteInfo.blogName}}</p>
  </div>

</template>

<script>
import {getSite} from '@/api/index'

export default {
  name:"myIndex",
  data(){
    return{
      siteInfo: {
        blogName: ''
      }
    }
  },
  created() {
    this.getSite()
  },
  methods: {
    getSite() {
      getSite().then(res => {
        if (res.code === 200) {
          this.siteInfo = res.data.siteInfo
          // this.badges = res.data.badges
          // this.newBlogList = res.data.newBlogList
          // this.categoryList = res.data.categoryList
          // this.tagList = res.data.tagList
          // this.randomBlogList = res.data.randomBlogList
          // this.$store.commit(SAVE_SITE_INFO, this.siteInfo)
          // this.$store.commit(SAVE_INTRODUCTION, res.data.introduction)
          document.title = this.$route.meta.title + this.siteInfo.webTitleSuffix
        }
      })
    },
    // //获取一言
    // getHitokoto() {
    //   getHitokoto().then(res => {
    //     this.hitokoto = res
    //   })
    // }
  }
}
</script>
<style  scoped>
</style>