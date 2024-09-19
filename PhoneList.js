import React from 'react';

function Phone({ phone }) {
   return (
         <div className='App'>
            
              <div className='pbox'>
                <h2>{phone.pname}</h2>
               <img src={phone.pimg} alt={phone.pname} />
               <p>{phone.ptext}</p>
             </div>
        
         </div>
   );
}
 
function PhoneList() {
 
   const phones = [
      {
         id: 1,
         pname: '스타벅스 리프레셔',
         pimg: require('./img/drink1.jpg'),
         ptext:'딸기 아사이 레모네이드 스타벅스 리프레셔'
      },
      {
         id: 2,
         pname: '콜드브루 커피',
         pimg: require('./img/drink2.jpg'),
         ptext:'콜드브루'
      },
      {
         id: 3,
         pname: '콜드브루 커피',
         pimg: require('./img/drink3.jpg'),
         ptext:'나이트로 바닐라 크림'
      },
    {
         id: 4,
         pname: '에스프레소',
         pimg: require('./img/drink4.jpg'),
         ptext:'에스프레소 콘 파나'

      },
 {
         id: 5,
         pname: '에스프레소',
         pimg: require('./img/drink5.jpg'),
         ptext:'스타벅스 1호점 바닐라 빈 라떼'
      },
{
         id: 6,
         pname: '에스프레소',
         pimg: require('./img/drink6.jpg'),
         ptext:'프렌치 바닐라 라떼'
      },
{
         id: 7,
         pname: '프라푸치노',
         pimg: require('./img/drink7.jpg'),
         ptext:'딸기 글레이즈드 크림 프라푸치노'
      },
{
         id: 8,
         pname: '블렌디드',
         pimg: require('./img/drink8.jpg'),
         ptext:'여수 바다 유자 블렌디드'
      }
   ];
 
   return (
      <div>
         {
            phones.map((phone,index) => (<Phone phone={phone} key={index} />)) 
         }
      </div>
   )
}
 
export default PhoneList;