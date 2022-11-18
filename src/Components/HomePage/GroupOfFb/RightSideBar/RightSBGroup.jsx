import React from 'react'
import './RightSBGroup.css'

function RightSBGroup() {
  return (
    <div className='RightSBGroup__container'>
      <div className="RightSBGroup__container__card">
      <div className="RightSBGroup__container__card__top">
        <div  className="RightSBGroup__container__card__top__left">
        <div className="RightSBGroup__container__card__top__left__top">

          Suggested for you
        </div>
        <div className="RightSBGroup__container__card__top__left__bottom">

        Groups you might be interested in.
        </div>
        </div>
        <div className="RightSBGroup__container__card__top__right">
          See More
        </div>
      </div>
      <div className="RightSBGroup__container__card__innerDiv">
        <div className="RightSBGroup__container__card__innerDiv__image">
          <img src="https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt="nothing" />
        </div>
        <div className="RightSBGroup__container__card__innerDiv__upperText">
          Actress Kajal Raj Official
        </div>
        <div className="RightSBGroup__container__card__innerDiv__bottomText">
          100k members 10+ posts a day
        </div>
        <button className="RightSBGroup__container__card__innerDiv__JoinBtn">
          Join Group
        </button>
      </div>

      </div>
    </div>
  )
}

export default RightSBGroup