import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './GallerySlide.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const GallerySlide: React.FC = () => {
    const imageUrls = [ 
        "https://s3-alpha-sig.figma.com/img/8f96/9218/f394acb2c7ec2179f6312b78619b9eb8?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y2AUAiikPiQr3BqAfJ9T240lwBKORv~cwVbn290joe7N1Ykl-2DwcMtkvlqGzlDXLqggn4JjvJe9YBLBecF6aDS3ghH9rKgE2VmjE36lQxaXWgOvQCeTVPlQn8XJSfG2FUQn9fqEo6loZks3RQ0B3kBjAtBL~H1qzQ3VU2aKZmJ7kvB33m414S~khIOAfMbVPZxy6TRfhcpbnGkCLPDQEOboojmmSYVeZMNspQIi7V74IEubWD6rBOAV9mCPQYH4EUI0U94TWx0ceHPWDwMp3X-E5Yd1vPaHyj0rktNm6C9LGYRpJGJZiVOjq28ugwtn2IppZL~hnN8ditYGi2zl2w__",
        "https://s3-alpha-sig.figma.com/img/ee9b/794e/65c9c0c12e11e1766f8fa3c1701f2f6f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ni3AzVVc0oVTtFbrmVFNiyj6Z3s5qmqjnM-AbgMGi8FYfzudzamZMbCUwhofPYiqk289mF3sym2MyQPW5AxuU0YJlG2gGJ~3P~HGOPDWvWNm22F0gGYRL19Wh6gJm764U91V9Eh-Y1sXto0fw9zHVVmLjPijuRQvCZVQa961ff6Cy10U0347KqIppyiuN6BZYgj-~52Xf7SCHndkbKY8CrgAUf7uQl1VvX2lJmGcFdmuGyD7uZRRfRzWCkXGNamD3ib7kQTRgTpgAGUEWXTYjCWqvZYOuVqpNjf9pdyvaUSehqtkUVLkUAD-7UUtUynEWu2qYwce3kq6mPev5gJ7rQ__",
        "https://s3-alpha-sig.figma.com/img/8ff1/0065/dced14431eb56b61b6c337e71bb37805?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJY-d6BhW5AQx7bMrtbJSDY4lwpdqKSnvqBOBDwWiSKpFylp91Watxm9b9UDJyh~D1f3oQgxpWkPDdPgHmM-6sffNSuC1m3vIyYf4fAYkYDwcJ~Vl8cveCjtgbo~E~ALRoL-bU9HwnZPqFVkl2xl7a-8ylrTreMY3mnDTrxLg1LzD6mjuCMFhw3KNKq654VW1F~QTS1Y~5i~jd8xo8g1kIc3LqekRiVqsdqef8Aev54H6oC-rV2F7GjI6j~JRwTR07plt6pzOKwQ~2viJ5ukqTwuG8gE2jUiy-Vy1kp~gJfn2mAkYJs98~cuQ2VXJFhntoOOvV26CGSNCY2wYVmK1Q__",
        "https://s3-alpha-sig.figma.com/img/032a/9725/e9f67a2647e24c8eaf861719ba940d40?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hJQfYGU3TMG-pjMAtDauuKF82AoLLI8QXoUfAYMTf-rGE3ADotQreWp8h5FMUi5kXq69Ve72jbvCGSgK7F-6pan0IEx16bAjPQ03jrF6XpBd5ezx01zU8ZrzCDbtC3OCxMBIz~xieKXD-VAhf6ti8~GR1jNzWurDMuuVac0gSXfcEgR221kJbp15S4sAFGefUNUMsRioeLwksuLimFguOp5Ck9yrK4VHatDT-XnF2HmBIhFMJOf7UvhFGFUxq0JuEj2uAGionUwA6068xqgmTvlUm8~crdTdZVr0R29kyjd0x2l6KdhKWz6DDdmuwKTmAwr89PWLpyWDNHzHGJh~mw__",
        "https://s3-alpha-sig.figma.com/img/c5c3/00fd/5a188d5133ecf5c500d689eb3bc64fb5?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oCPwfQaLNyx7qjNCQJUC3RwktWycLZ1OYgUkXK~ayFASBeJ8lPNa76vxchNcVGz5Poc~wL23Dsj-tjh4VGGET0dM1gH0VSVDhMYBXed5y-hbIG-YW7Zb8eFGJmfYYDj5yU5a8e-0qUKar-JgJvjrnk~tKB5ID2CoJTbIVT~5sBneIl531rHgl8sIKHkE3tOTlQmd9Wh6uxoR7ODJdQUiPPYeWv7Sp6EvRYvceVn43~tlHSQCsLlB47F28bdqG0kGi-4-zsdqaliIhSzvgtEJsMVuPkdpPrWBGYIDYsAvzNwU1aqsjW9WZ48TveTxfYFAA3g34uPZ59yNKjBpqlbsag__",

    ];

    return (
        <div className="w-full px-4 py-16 justify-center items-start swiper-container">
            <div>
                <img src="./arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </div>
            <div>
                <h1 className='text-6xl font-bold tracking-wider heading'>Gallery</h1>
                {/*<img src='./arrow_back_ios_FILL0_wght400_GRAD0_opsz24.png'/>*/}
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                        coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,}}
                        pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper">
                    {imageUrls.map((url, index) => (
                        <SwiperSlide key={index}> 
                            <img src={url} />
                        </SwiperSlide>
                    ))} 
                </Swiper>
                {/*<img src='./arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png'/>*/}
            </div>
            <div><img src="./arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></div>
        </div>
    );
};

export default GallerySlide;
