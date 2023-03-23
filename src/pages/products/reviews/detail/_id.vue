<template>
  <!-- Back to top button -->
  <div class="back-to-top"></div>
  <main>
    <div class="page-section pt-5">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ul class="breadcrumb p-0 mb-0 bg-transparent">
            <li class="breadcrumb-item"><router-link :to="'/'">홈</router-link></li>
            <li class="breadcrumb-item"><router-link :to="'/products/'+productDetail.p_id">상품</router-link></li>
            <li class="breadcrumb-item active">리뷰</li>
          </ul>
        </nav>
        
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-single-wrap">
				<c:forEach items='${product}' var="product" varStatus="status">
	
		              <div class="post-content">
		                <blockquote class="quote">
			           	 <ul>
			           	 	 <li>✔︎ 브랜드 : {{productDetail.brand}}</li>   
				           	 <li>✔︎ 상품명 : {{productDetail.name}}</li>
				           	 <li>✔︎ 배송타입 : {{productDetail.delivery_type}}</li>
				      	     <li>✔︎ 작성일 : {{review.review_date}}</li>
			           	 </ul>
		                <span class="author"></span>
		                </blockquote>
		                <img alt="" style="margin:20px" v-bind:src="productDetail.img_url">
		                <p>{{review.contents}}</p>
		              </div>
	              </c:forEach>
            </div>
  
            <div class="comment-form-wrap pt-5">
              <h2 class="mb-5">댓글 남기기</h2>
              <form action="#" class="">
                <div class="form-row form-group">
                  <div class="col-md-6">
                    <label for="name">아이디 *</label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="col-md-6">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email">
                  </div>
                </div>
   
                <div class="form-group">
                  <label for="message">내용</label>
                  <textarea name="msg" id="message" cols="30" rows="8" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="댓글 등록" class="btn btn-primary">
                </div>
    
              </form>
            </div>
  
          </div>
          <div class="col-lg-4">
            <div class="widget">
              
  
              <!-- Widget Categories -->
              <div class="widget-box">
                <h4 class="widget-title">카테고리</h4>
                <div class="divider"></div>
  
                <ul class="categories">
                  <li><a href="#">과일 · 채소</a></li>
                  <li><a href="#">과자 · 간식 · 떡</a></li>
                  <li><a href="#">정육 · 계란</a></li>
                  <li><a href="#">베이커리</a></li>
                  <li><a href="#">생활용품</a></li>
                </ul>
              </div>
  
              <!-- Widget recent post -->
              <div class="widget-box">
                <h4 class="widget-title">최근 본 상품</h4>
                <div class="divider"></div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      <img src="/resources/img/blog/blog-1.jpg" alt="">
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      <img src="/resources/img/blog/blog-2.jpg" alt="">
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
                <div class="blog-item">
                    <a class="post-thumb" href="">
                      <img src="/resources/img/blog/blog-3.jpg" alt="">
                    </a>
                    <div class="content">
                      <h6 class="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h6>
                      <div class="meta">
                        <a href="#"><span class="mai-calendar"></span> July 12, 2018</a>
                        <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a>
                      </div>
                    </div>
                </div>
  
              </div>
  
              <!-- Widget Tag Cloud -->
              <div class="widget-box">
                <h4 class="widget-title">해시태그</h4>
                <div class="divider"></div>
  
                <div class="tag-clouds">
                  <a href="#" class="tag-cloud-link">Projects</a>
                  <a href="#" class="tag-cloud-link">Design</a>
                  <a href="#" class="tag-cloud-link">Travel</a>
                  <a href="#" class="tag-cloud-link">Brand</a>
                  <a href="#" class="tag-cloud-link">Trending</a>
                  <a href="#" class="tag-cloud-link">Knowledge</a>
                  <a href="#" class="tag-cloud-link">Food</a>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </main>

  <footer class="page-footer">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 py-3">
          <h3>Digi<span class="text-primary">Gram.</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <p><a href="#" >digigram@mail.com</a></p>
          <p><a href="#">+00 1122 3344 5566</a></p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Quick Links</h5>
          <ul class="footer-menu">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Report a Bug</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>About Us</h5>
          <ul class="footer-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our Teams</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">News & Press</a></li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Subscribe</h5>
          <form action="#">
            <input type="text" class="form-control" placeholder="Enter your mail..">
          </form>

          <div class="sosmed-button mt-4">
            <a href="#"><span class="mai-logo-facebook-f"></span></a>
            <a href="#"><span class="mai-logo-twitter"></span></a>
            <a href="#"><span class="mai-logo-google"></span></a>
            <a href="#"><span class="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 py-2">
          <p id="copyright">&copy; 2020 <a href="https://macodeid.com/">MACode ID</a>. All rights reserved</p>
        </div>
        <div class="col-sm-6 py-2 text-right">
          <div class="d-inline-block px-3">
            <a href="#">Privacy</a>
          </div>
          <div class="d-inline-block px-3">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div> <!-- .container -->
  </footer> <!-- .page-footer -->

</template>

<script>
import { ref } from 'vue'

export default{ 
    setup() {
        const product = ref('');
        
        const review = ref({
            p_id: 1 ,
            m_id: 1 , 
            r_id: 1 , 
            contents:'또 먹고싶은 맛이에요. 해장으로 딱이고, 매운거 좋아하는 사람한테 딱입니다.원래 댓글같은거 잘 안남기는데 이번에는 가격도 착하고, 맛도 너무 있어서 처음으로 리뷰 남겨요^^' , 
            review_date: '2023-03-23'
        });

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
            review,
        }
    }
}
</script>

<style>

</style>