<template>
<div class="wrapper">
    <b-card-group deck class="list">
        <b-card v-for="(item, index) in dataArr"  :key="index" no-body
        :img-src="item.imgStr"
        img-alt="Img"
        img-top 
        class="cardItem">
            <p class="text-muted">{{ item.desr }}</p>
            <!-- <b-card-body>
                <a href="">{{ item.linkStr }} </a>
            </b-card-body> -->
            <div>
                <span class="price">{{ item.title }}</span>
            </div>
        </b-card>
    </b-card-group>
</div>
</template>

<script>
export default {
    name: "wrapper",
    data() {
       return {
           msg : " ",
           dataArr: [
               {
                    title: "¥ 100.00",
                    desr: "商品描述here",
                    imgStr:"http://www.hezhongyimeng.com/nmip/medical/images/index/shop4.png",
                    linkStr:"更多 >>"
               },
               {
                    title: "居民健康档案",
                    desr: "商品描述here",
                    imgStr:"http://www.hezhongyimeng.com/nmip/medical/images/index/shop3.png",
                    linkStr:"更多 >>"
               },
               {
                    title: "风险评估报告",
                    desr: "由中华预防医学会提供专业风险评估报告，全面评估各类型疾病的发病风险",
                    imgStr:"http://www.hezhongyimeng.com/nmip/medical/images/index/shop1.png",
                    linkStr:"更多 >>"
               },
               {
                    title: "全面干预方案",
                    desr: "由301医院等国内外多家机构提供的权威解决方案，运动营养心理全面呵护您的健康",
                    imgStr:"http://www.hezhongyimeng.com/nmip/medical/images/index/shop2.png",
                    linkStr:"更多 >>"
               }
           ]
       }
   },
   components: {

   }  
}
</script>

<style scoped>
.wrapper {
    margin: 15px auto;
    width: 80%;
}

.price {
    padding: 15px 0px;
    color: #21a1a8;
}
</style>
