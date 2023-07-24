/* eslint-disable */
// @ts-nocheck

import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const HospitalMap = () => {
  const [places, setPlaces] = useState([]);
  const [searchPlace, setSearchPlace] = useState('뚝섬로 3길 6 동물병원');

  const infowindowRef = useRef(null);
  const markersRef = useRef([]);
  const mapRef = useRef(null);

  const handleChangeSearch = e => {
    setSearchPlace(`${e.target.value} 동물병원`);
  };

  useEffect(() => {
    markersRef.current = [];

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 9999 });

    infowindowRef.current = infowindow;

    var markers = [];
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);

    mapRef.current = map;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
              markersRef.current = [];
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });

      markersRef.current.push(marker);

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        infowindowRef.current.setContent(
          `<div style="padding:0.8rem;font-size:12px;">
            <a href=${place.place_url} target="blank" style="display:block;font-size: 1.2rem;
            font-weight: 500;
            color: #0c43b7;
            margin-bottom: 1rem; line-height:1.3;">${place.place_name}</a>
            <p style="  font-size: 1.1rem;
            font-weight: 400;
            color: #111;
            margin-bottom: 1.5rem;">${place.road_address_name}</p>
            <p style="  font-size: 1.1rem;
            font-weight: 400;
            color: #009900;
            ">Tel: ${place.phone}</p>
          </div>`
        );
        infowindowRef.current.open(map, marker);
      });
    }
  }, [searchPlace]);

  // 마우스 오버시 해당 마커의 인포윈도우를 열어주는 함수
  const handleMouseClick = (place, index) => {
    console.log(markersRef.current);
    const marker = markersRef.current[index];
    // 인포윈도우가 열린 상태에서 다시 열렸을 때, setContent와 open을 다시 호출해야 합니다.
    infowindowRef.current.setContent(
      `<div style="padding:0.8rem;font-size:12px;">
        <a href="${place.place_url}" target="blank" style="display:block;font-size: 1.2rem;
        font-weight: 500;
        color: #0c43b7;
        margin-bottom: 1rem; line-height:1.3;">${place.place_name}</a>
        <p style="  font-size: 1.1rem;
        font-weight: 400;
        color: #111;
        margin-bottom: 1.5rem;">${place.road_address_name}</p>
        <p style="  font-size: 1.1rem;
        font-weight: 400;
        color: #009900;
        ">Tel: ${place.phone}</p>
      </div>`
    );
    infowindowRef.current.open(mapRef.current, marker);
    const position = new kakao.maps.LatLng(place.y, place.x);
    mapRef.current.panTo(position); // 해당 위치로 지도의 중심 이동
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.HospitalIntro>
          <S.MainTitle>DOGTOR 동물 병원 찾기</S.MainTitle>
          <S.SubTitle>가까운 동물 병원을 확인하세요</S.SubTitle>
        </S.HospitalIntro>
        <S.MapContent>
          <S.Map id="myMap"></S.Map>
          <S.SearchBox>
            <S.SearchContainer>
              <S.InputBox>
                <input
                  type="text"
                  id="keyword"
                  onChange={handleChangeSearch}
                  placeholder="주소 또는 병원명을 입력해주세요."
                />
              </S.InputBox>
              <S.PlaceList>
                {places?.map((place, index) => (
                  <li key={place.place_name} onClick={() => handleMouseClick(place, index)}>
                    <a>
                      <S.HospitalName>
                        {index + 1}. {place.place_name}
                      </S.HospitalName>
                      <S.HospitalAddress>주소: {place.road_address_name}</S.HospitalAddress>
                      {place.phone && (
                        <S.HospitalTel>
                          <span>TEL: </span>
                          {place.phone}
                        </S.HospitalTel>
                      )}
                    </a>
                  </li>
                ))}
              </S.PlaceList>
              <S.PageBox id="pagination" />
            </S.SearchContainer>
          </S.SearchBox>
        </S.MapContent>
      </S.Container>
    </S.Wrap>
  );
};

export default HospitalMap;
