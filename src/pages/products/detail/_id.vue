<template>
  <div class="container"></div>
  <!--중단 상품리스트 -->
  <div class="shCMSshop">
    <div class="shopView">
      <div class="viewHeader">
        <!-- 상품이미지 -->
        <div class="productImg">
            <img v-bind:src="productDetail.img_url" alt="">
        </div>
        <!-- 상품 설명 -->
        <div class="productInfo">
          <h3>{{productDetail.name}}</h3>
          <div class="price">
            <span class="sale">20<span>%</span></span>
            <span class="cost-price">{{productDetail.price / 0.8}}원</span>
            <span class="sale-price">{{productDetail.price}}원</span>
          </div>
          <div class="manufact">제조사 <span>{{productDetail.brand}}</span></div>
          <div class="categori">분류 <span>기타</span></div>
          <div class="origin">원산지 <span>각 재료 별 원산지는 상세설명 참조</span></div>
          <div class="items">
              <h3>
								<div class="num">
									<span>수량 </span>
									<span class="count">
										<a v-on:click="count--" href="#" class="minus"> - </a>
										<span id="result"> {{count}} </span>
										<a v-on:click="count++" href="#" class="plus"> + </a>
									</span>
								</div>
							</h3>
          </div>
          <div class="all-price">총 상품금액 <span> {{productDetail.price * count}} </span>원</div>
          <div class="btn">
            <a href="">장바구니</a>
            <a href="">구매하기</a>
          </div>
        </div>
      </div>
      <!-- 하단의 탭부분 시작 -->
      <div class="viewBody">
        <ul class="contentNav">
          <li class="active"><a href="">상품 정보</a></li>
          <!-- <li><a href="">상품 후기<span>(<span class="count">20</span>)</span></a></li> -->
          <li><router-link to="/products/reviews">상품 후기<span>(<span class="count">20</span>)</span></router-link></li>
          <li><a href="">Q & A <span></span></a></li>
          <li><a href="">반품 / 교환</a></li>
        </ul>
        <!-- 탭부분 끝 -->
        <!-- 상품정보 -->
        <table class="tproduct-info active">
          <tr>
            <td>제품명</td>
            <td>{{productDetail.name}}</td>
            <td>식품의 유형</td>
            <td>기타</td>
          </tr>
          <tr>
            <td>제조사</td>
            <td>{{productDetail.brand}}</td>
            <td>배송타입</td>
            <td>{{productDetail.delivery_type}}</td>
          </tr>
          <tr>
            <td>제조년월일</td>
            <td>제조일로부터 일주일이내 포장된 제품으로 발송됩니다.</td>
            <td>품질유지기한</td>
            <td>제조일로부터 120일</td>
          </tr>
        </table>
        <!-- 상품 후기 -->
        <table class="tproduct-review">
          <thead>
            <tr>
              <td>평점</td>
              <td>내용</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tr>
            <td>별점</td>
            <td class="tcontent"><img src="" alt=""><span>내용 - 짧은 내용(동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세</span></td>
            <td>rud***</td>
            <td>2017-09-26 10:20</td>
          </tr>
          <tr class="detail-content">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>별점</td>
            <td class="tcontent"><img src="" alt=""><span>내용 - 짧ㅁㄴㅇㄻㄴㅇㄻㄴ은 내용(동해물과 백두산이 마르고 닳도록 블라불라블라 </span></td>
            <td>rud***</td>
            <td>2017-09-26 10:20</td>
          </tr>
          <tr class="detail-content">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>별점</td>
            <td class="tcontent"><img src="" alt=""><span>내용 - 짧은 내용(동해물과 백두산이 마르고 닳도록 </span></td>
            <td>rud***</td>
            <td>2017-09-26 10:20</td>
          </tr>
          <tr class="detail-content">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <!-- Q & A  -->
        <table class="tquestion">
          <thead>
            <tr>
              <td>번호</td>
              <td colspan="2">내용</td>
              <td>작성자</td>
              <td>작성일
                <a href="">문의 하기</a>
              </td>
            </tr>
          </thead>
          <tr>
            <td>글번호</td>
            <td class="answer-no">미완료</td>
            <td class="tcontent">내용 - 문의</td>
            <td>rud***</td>
            <td>2017-09-26 10:20</td>
          </tr>
          <tr>
            <td>글번호</td>
            <td class="answer-ok">답변완료</td>
            <td class="tcontent">내용 - 문의</td>
            <td>rud***</td>
            <td>2017-09-26 10:20</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default{ 
    setup() {
        const product = ref('');
        const count = ref(1);

        const productDetail = ref({
            p_id: 1, 
            brand: '홍대주꾸미', 
            price: 6600, 
            name: '주꾸미 볶음', 
            stock: 2300, 
            delivery_type: '깜깜배송', 
            sales_amount: 1500, 
            img_url: 'https://img-cf.kurly.com/cdn-cgi/image/quality=85,width=400/shop/data/goods/1653034699910l0.jpeg'
        });

        return {
            product,
            productDetail,
            count,
        }
    }
}
</script>

<style scoped>
    ul,li,body,h1,h2,h3,h4,h5,h6{margin: 0; padding: 0;}
	ul li{list-style: none;}
	a{text-decoration: none;}
	*{font-family: "NanumBarunGothic";}

	.shCMSshop{margin: 0;	padding: 60px 0 0 0;	width: 1200px; margin: 0 auto;}
	.shCMSshop .shopView .viewHeader:after{display: block; content: ''; clear: both;}
	.shCMSshop .shopView .viewHeader .productImg{float: left; }
	.shCMSshop .shopView .viewHeader .productImg .mainImg{width: 500px; height:500px; background: #000;}
	.shCMSshop .shopView .viewHeader .productImg ul{margin-top: 35px;}
	.shCMSshop .shopView .viewHeader .productImg ul li{width: 85px; height:85px; background: #000; display: inline-block;margin-right: 25px; border:1px solid #ccc; cursor: pointer;}
	.shCMSshop .shopView .viewHeader .productImg ul li:first-child{margin-left: 30px;}

	.shCMSshop .shopView .viewHeader .productInfo{margin-left: 50px; width: 650px; float:left;}
	.shCMSshop .shopView .viewHeader .productInfo h3{font-size: 23px;margin-bottom: 63px;}
	.shCMSshop .shopView .viewHeader .productInfo .price{border-bottom: 1px solid #e6e6e6;padding-bottom: 16px;}
	.shCMSshop .shopView .viewHeader .productInfo .price:after{display: block; content:''; clear: both;}
	.shCMSshop .shopView .viewHeader .productInfo .sale{font-size: 45px; font-family:"Arial"; color:#e63740; font-weight: bold; float: left;}
	.shCMSshop .shopView .viewHeader .productInfo .sale span{font-size: 25px;}
	.shCMSshop .shopView .viewHeader .productInfo .cost-price{float: left; margin: 5px 0 0 20px; font-size: 15px; color: #5a5a5a; text-decoration: line-through;}
	.shCMSshop .shopView .viewHeader .productInfo .sale-price{float: left; margin: 15px 0 0 -55px; font-family: "Tahoma"; font-weight: bold; font-size: 25px;}

	.shCMSshop .shopView .viewHeader .productInfo .price~.manufact, .categori, .origin{padding: 16px 0 16px 10px; border-bottom: 1px solid #e6e6e6; font-size: 18px; white-space: pre;}
	.shCMSshop .shopView .viewHeader .productInfo .price~.manufact span, .categori span, .origin span{color:#6a6a6a;}
	.shCMSshop .shopView .viewHeader .productInfo .items{padding: 16px 0;}
	.shCMSshop .shopView .viewHeader .productInfo .items select{width: 630px; height: 40px; margin: 0 auto; display: block; border: 1px solid #cdcdcd;}
	.shCMSshop .shopView .viewHeader .productInfo .item{padding: 16px 0 16px 10px; border-bottom: 1px solid #e6e6e6; position: relative;}
	.shCMSshop .shopView .viewHeader .productInfo .item:after{display: block;content: '';clear: both;}
	.shCMSshop .shopView .viewHeader .productInfo .item a{width: 25px; height:25px; background: #f8f8f8; border: 1px solid #d8d8d8;box-sizing: border-box; display: inline-block;}
	.shCMSshop .shopView .viewHeader .productInfo .item .item-name{font-size: 16px; font-weight: 300;}
	.shCMSshop .shopView .viewHeader .productInfo .item .item-name+span{display: inline-flex; margin-left: 40%;}
	.shCMSshop .shopView .viewHeader .productInfo .item .item-name+span a{padding-top: 2px; text-align: center;}
	.shCMSshop .shopView .viewHeader .productInfo input[type="number"]{margin: 0 -1px;padding-top: 4px;width: 40px; border:1px solid #d8d8d8;text-align: right;}
	.shCMSshop .shopView .viewHeader .productInfo .item-price{font-family: "Tahoma"; font-weight: bold; font-size: 18px; margin-left: 5%;}
	.shCMSshop .shopView .viewHeader .productInfo .item-price+a{float:right; text-align: center; width: 18px; height: 18px; margin: 5px 10px 0 0; font-weight: bold; padding-bottom: 18px;}
	.shCMSshop .shopView .viewHeader .productInfo .all-price{margin-top: 55px; text-align: right; white-space: pre; font-size: 18px;}
	.shCMSshop .shopView .viewHeader .productInfo .all-price span{font-family: "Tahoma"; font-size: 25px; font-weight: bold; color: #e63740;}
	.shCMSshop .shopView .viewHeader .productInfo .btn{text-align: right;margin-top: 40px;}
	.shCMSshop .shopView .viewHeader .productInfo .btn a{padding: 15px 56px;font-size: 22px; display: inline-block;}
	.shCMSshop .shopView .viewHeader .productInfo .btn a:first-child{color: black; border: 1px solid black; box-sizing: border-box;}
	.shCMSshop .shopView .viewHeader .productInfo .btn a:last-child{background: rgb(95, 0, 128); color: white; font-size: 22px;margin-left: 26px; border:1px solid;}

	.shCMSshop .shopView .viewBody{margin-top: 100px;}
	.shCMSshop .shopView .viewBody .contentNav:after{display: block;content:'';clear: both;}
	.shCMSshop .shopView .viewBody .contentNav li{width: 25%; float: left; background: #f2f2f2; border: 1px solid #282e32; box-sizing: border-box; text-align: center;margin-right: -1px;font-size: 18px;}
	.shCMSshop .shopView .viewBody .contentNav a{display: block; padding:20px 0;}
	.shCMSshop .shopView .viewBody .contentNav a span{font-size: 15px;}
	.shCMSshop .shopView .viewBody .contentNav a span .count{font-size: 15px;}
	.shCMSshop .shopView .viewBody .contentNav li.active{background: #282e32;}
	.shCMSshop .shopView .viewBody .contentNav li.active a{color: white;}

	/*테이블 기본 셋팅*/
	.shCMSshop .shopView .viewBody table{border-top: 1px solid #afafaf; border-bottom: 1px solid #d4d4d4; width: 100%; margin: 60px 0 40px 0; border-collapse: collapse; border-spacing: 0;font-size: 14px;}
	.shCMSshop .shopView .viewBody thead>tr{height:40px;background: #f2f2f2;text-align: center;}
	.shCMSshop .shopView .viewBody table tr{border-top:1px solid #d4d4d4;}
	.shCMSshop .shopView .viewBody table tr:first-child{border-top: none;}
	.shCMSshop .shopView .viewBody table .tcontent{text-align: left;}
	.shCMSshop .shopView .viewBody table .tcontent:hover{cursor: pointer;}
	.shCMSshop .shopView .viewBody table .tcontent:hover span{text-decoration: underline;}
	.shCMSshop .shopView .viewBody table .tcontent span{white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 225px; display: inline-block;}
	/*상품 정보*/
	.shCMSshop .shopView .viewBody .tproduct-info tr:first-child{border-top:2px solid #5d5d5d;}
	.shCMSshop .shopView .viewBody .tproduct-info tr td{padding: 0 13px; line-height: 20px;}
	.shCMSshop .shopView .viewBody .tproduct-info tr td:first-child{background: #f2f2f2; height: 50px; padding-left: 20px; width: 16.5%;}
	.shCMSshop .shopView .viewBody .tproduct-info tr td:nth-child(3){background: #f2f2f2; width: 16.5%; padding-left: 20px;}
	/*상품 후기*/
	.shCMSshop .shopView .viewBody .tproduct-review thead>tr>td:first-child{width: 130px; background: #f2f2f2; height: 40px;text-align: center;}
	.shCMSshop .shopView .viewBody .tproduct-review thead>tr>td:nth-child(3){width: 140px;}
	.shCMSshop .shopView .viewBody .tproduct-review thead>tr>td:last-child{width: 145px;text-align: center;}
	.shCMSshop .shopView .viewBody .tproduct-review tr{height: 50px; text-align: center;}
	/*상품 후기 더보기*/
	.shCMSshop .shopView .viewBody .tproduct-review .detail-content{display: none;}
	.shCMSshop .shopView .viewBody .tproduct-review .detail-content td:first-child{width: 130px;}
	.display{display:table-row!important;border-top:none!important;}
	.overflow{overflow:inherit!important;}
	.text{width: 207px!important; text-overflow: unset!important;}
	/*Q & A 테이블 감싸기 - 문의하기 버튼 넣기 용도*/
	.shCMSshop .shopView .viewBody .tquestion{position: relative;}
	.shCMSshop .shopView .viewBody .tquestion a{position: absolute; right: 0; top: -40px; padding:8px 12px; background: #666; color:white; font-size: 14px;}
	/*Q & A*/
	.shCMSshop .shopView .viewBody .tquestion thead>tr>td:first-child{width: 72px; background: #f2f2f2; height: 40px;text-align: center;}
	.shCMSshop .shopView .viewBody .tquestion thead>tr>td:nth-child(3){width: 140px;}
	.shCMSshop .shopView .viewBody .tquestion thead>tr>td:last-child{width: 145px;}
	.shCMSshop .shopView .viewBody .tquestion tr{text-align: center;}
	.shCMSshop .shopView .viewBody .tquestion tr{height: 40px;}
	.shCMSshop .shopView .viewBody .tquestion tr:first-child~tr td:nth-child(2){width: 95px;}
	.shCMSshop .shopView .viewBody .tquestion td.answer-no{color: #e63740;}
	.shCMSshop .shopView .viewBody .tquestion td.answer-ok{color: #3c43c7;}

	/*jquery용 테이블 셋팅*/
	.shCMSshop .shopView .viewBody table{display: none;}
	.shCMSshop .shopView .viewBody table.active{display: table;}
</style>