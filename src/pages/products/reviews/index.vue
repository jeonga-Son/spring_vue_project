<template>
   <main>
    <div class="page-section">
        <div class="container"></div>
      	<!--중단 상품리스트 -->
		
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <div class="carousel">
            <div class="review-slider">
                <div class="slides con relative">
                    <div class="pg 01 item inline-block active">
                        <ul class="list row">
                            <table>
                                <thead>
                                    <td>번호</td>
                                    <td>작성자</td>
                                    <td>내용</td>
                                    <td>작성일</td>
                                </thead>
                                 <tbody :value="review.r_id" :key="review.r_id" v-for="review in reviews">
                                    <td>{{review.r_id}}</td>
                                    <td>{{review.m_id}}</td>
                                    <td><router-link :to="{path:'/products/review/'+review.r_id}">{{review.contents}}</router-link></td>
                                    <td>{{review.review_date}}</td>
                                </tbody>
                            </table>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination con text-align-center" style="text-align:center; left:35%;">
                <a href="#" class="pg-btn-prev"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="pg-btn">1</a>
                <a href="#" class="pg-btn">2</a>
                <a href="#" class="pg-btn">3</a>
                <a href="#" class="pg-btn">4</a>
                <a href="#" class="pg-btn">5</a>
                <a href="#" class="pg-btn">6</a>
                <a href="#" class="pg-btn">7</a>
                <a href="#" class="pg-btn">8</a>
                <a href="#" class="pg-btn">9</a>
                <a href="#" class="pg-btn-next"><i class="fas fa-chevron-right"></i></a>
                <a style="margin-left:150px;" href="/products/reviews" class="btn btn-primary">리뷰 작성</a>  
        </div>
    </div>
</main>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const review = ref('');
        const reviews = ref([
            {p_id: 1 , m_id: 1 , r_id: 1 , contents:'살쪘어요' , review_date: '2023-03-23'},
            {p_id: 1 , m_id: 2 , r_id: 2 , contents:'맛있어요' , review_date: '2023-03-23'},
            {p_id: 1 , m_id: 3 , r_id: 3 , contents:'배고파요' , review_date: '2023-03-23'}
        ]);

        return {
            review,
            reviews,
        }
    }
}
</script>

<style scoped>
/*  폰트 적용 */
@import url(http://merongshop.com/ind-script/optimizer.php?filename=tZVBUsUgDIb3rVvPEauXeCsXegIKsTACYZLg2NvLe-3CmbdxKl2Syf_9mSQAeEoI0zNDYVrYJGAUqmwRrAh8MGUFSylRfmiBR_hLPtpBKFYNlIeZvg8Kq-pR02hW5GNSNXPEX1K0YxVkgYQtdxFP5WmCUucY7Og1RRCHo0MJSwb5DPllupETuRqxqdKMDJGWkDtS16sCiB3yJYgSr6_Uw6M1jqrCbCTYm-Hd6LtQt0BvahtjO-BQw1lkJYoayll4j_E0dlt_V-1pPS-mLZ9RPK3zZj4LfffQ_PNy7kaptlW5at99KCXkpZ_DPksQNGy9M2q6V28pfzVIexGL7Q7f639Di1m707euXNC47Q_4AQ&type=css&k=2485782bee608c5c4b65c94c695d14109bd58bf6&t=1540974567);

html {
    font-family: "dotum, Verdana, Dotum, AppleGothic", sans-serif
;
;
}

/* 노말라이즈 */
body, ul, li {
    margin:0;
    padding:0;
    list-style:none;
}

a {
    color:inherit;
    text-decoration:none;
}

/* 라이브러리 */
.con {
    margin:0 auto;
}

.img-box > img {
    width:100%;
    display:block;
}

.row::after {
    content:"";
    display:block;
    clear:both;
}

.cell {
    float:left;
    box-sizing:border-box;
}

.cell-right {
    float:right;
    box-sizing:border-box;
}

.block {
    display:block;
}

.inline-block {
    display:inline-block;
}

.text-align-center {
    text-align:center;
}

.line-height-0-ch-only {
    line-height:0;
}

.line-height-0-ch-only > * {
    line-height:normal;
}

.relative {
    position:relative;
}

.absolute {
    position:absolute;
}

.absolute-left {
    position:absolute;
    left:0;
}

.absolute-right {
    position:absolute;
    right:0;
}

.absolute-middle {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
.absolute-bottom {
    position:absolute;
    bottom:0%;
}

/*커스텀*/
.con {
    width:1250px;
}

.con-min-width {
    min-width:1336px;
}

/*리뷰 슬라이더*/
.review-slider > .slides {
    height:408.91px;
    width:1250px;

}

.review-slider > .slides  > div > ul > .cell {
    text-align:left;
    border:1px solid #dfdfdf;
    margin:5px;
}

.review-slider > .slides > div {
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    transform:translatex(4%);
    visibility:hidden;

}

.review-slider > .slides > .pg.active {
    visibility:visible;
}
/*페이지 버튼*/
/*페이지 버튼*/

.pagination {
    margin-bottom:30px;
    position:absolute;
}
.pagination > a {
    padding:11px 15px;
}


.pagination > .pg-btn:focus{
    background-color:rgb(239,239,239);
}

.pagination > .pg-btn-prev:active, .pagination > .pg-btn-next:active {
    background-color:rgb(239,239,239);
}



/*리뷰 제목*/
.review-slider > .slides > div > ul > a > .first-row {
    margin-left:12px;
    margin-right:10px;
    margin-top:10px;
    padding-bottom:12px;
    border-bottom:1px solid #dfdfdf;
}

.review-slider > .slides  > div > ul > a > .first-row > .title {
    font-size:12px;
    padding-bottom:5px;
}

/*리뷰 작성자 & 날짜*/

.review-slider > .slides  > div > ul > a > .first-row > .row {
    font-size:11px;
    color:rgb(196, 196, 196);
}

.review-slider > .slides  > div > ul > a > .first-row > .row > .date {
    padding-right:4px;
}

/*리뷰 싱품*/

.review-slider > .slides > div > ul > a > .second-row {
    padding-left:13px;
    padding-bottom:10px;
    padding-top:12px;
}

/*리뷰 싱품 이미지*/

.review-slider > .slides > div > ul > a > .second-row > img {
    width:32.99px;
}

/*리뷰 싱품 텍스트*/


.review-slider > .slides > div > ul > a > .second-row > div {
    padding-left:10px;
}

.review-slider > .slides  > div > ul > a > .second-row > div {
    font-size:10.5px;
}

/*리뷰 싱품명*/

.review-slider > .slides > div > ul > a > .second-row > div > .title {
    letter-spacing:-.3px;
    padding-bottom:3px;
}

/*리뷰 & 평점*/

.review-slider > .slides  > div > ul > a > .second-row > div > div:nth-of-type(2) {
    font-weight:bold;
    color:rgb(195, 183, 153);

}

.review-slider > .slides > div > ul > a > .second-row > div > div:nth-of-type(2) > .count {
    padding-right:30px;
}

</style>