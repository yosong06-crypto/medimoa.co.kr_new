'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="global_footer">
      <div className="con_wrap">
        <div className="info_wrap" data-aos="fade-right" data-aos-duration="1000">
          <img className="logo" src="/images/logo/t_logo.svg" alt="메디모아의원" />
          <div className="info">
            <div className="group">
              <div className="tit_wrap">
                <span>주</span>
                <span>소</span>
              </div>
              <p>경기 수원시 권선구 수인로 291 <br />
              서수원이마트 3층, 메디모아의원</p>
            </div>
            <div className="group">
              <div className="tit_wrap">
                <span>대</span>
                <span>표</span>
                <span>번</span>
                <span>호</span>
              </div>
              <a href="tel:031-294-1575">031)294-1575</a>
            </div>
            <div className="group">
              <div className="tit_wrap">
                <span>아동발달센터 번호</span>
              </div>
              <a href="tel:031-548-0615">031)548-0615</a>
            </div>
            <div className="group">
              <div className="tit_wrap">
                <span>진</span>
                <span>료</span>
                <span>시</span>
                <span>간</span>
              </div>
              <ul>
                <li>
                  <span>평일</span>
                  <span>10:00 - 19:00</span>
                </li>
                <li>
                  <span>주말/공휴일</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li>
                  <span>둘째, 넷째주 일요일 휴진</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map_wrap" data-aos="fade-left" data-aos-duration="1000">
          <div className="root_daum_roughmap">
            <iframe 
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=%EC%84%9C%EC%88%98%EC%9B%90%EC%9D%B4%EB%A7%88%ED%8A%B8&zoom=17"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="foot_b">
        <ul className="pri_wrap">
          <li>
            <Link href="/">메디모아의원</Link>
          </li>
          <li>
            <a href="javascript:void(0);" className="btn_pop" data-target="#pop_info">개인정보취급방침</a>
          </li>
          <li>
            <a href="javascript:void(0);" className="btn_pop" data-target="#pop_uninsured">비급여항목</a>
          </li>
          <li>
            <a href="javascript:void(0);" className="btn_pop" data-target="#pop_patient">환자권리</a>
          </li>
        </ul>
        <div className="bottom">
          <p>주소. 경기 수원시 권선구 수인로 291 서수원이마트 3층 메디모아의원</p>
          <p>대표자. 고창범</p>
          <p>사업자번호. 220-99-00457</p>
          <p>대표이메일. lovekidme@daum.net</p>
          <p>ⓒ 2025 메디모아의원</p>
        </div>
      </div>
    </footer>
  );
}
