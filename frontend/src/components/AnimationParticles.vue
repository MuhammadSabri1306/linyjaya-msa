<template>
	<div class="relative overflow-hidden w-full banner_part">
		<img src="data:image/webp;base64,UklGRugDAABXRUJQVlA4TNwDAAAvQAAQEM9iIG2buJ/17Tcw//MiICiRJMrgGQNgKA0SbGtP22h4JgymMDMzNMwM5c7+dyJLimkB/x/Rfwhu20iScowdpysze1bVF77p8u+sfzPBv2tzwxXzBM5n/PHIDRP4vZ9857f0M07vF885LZroZmzvN8/Zlj7CZXTvDyLiX0TqDegWl2hPiv0Gat4/nlPjACiiNTgqxdSeDew8twHiX6QIR9ScNLOB3YFORHQhqpMcCDagidbgpDrnH6W43OBh3Q1ICf/UMZzQgOpjNKMUrw/9tCN6aYEi6lOPgZnGpktV/IIoIcqIEiIIflVwscEM05pE9Xh9gijJSiBIOyiyJAo+r4eID4Jr3HR7fH5RVoKhcCRKewRDQUUWBZ/HzQvK+MhJr1+QlGA4EosnkpACSALGY5FwUJEEv5cTLDxAJkU5EIrEEql0JpsDAMhiOpWIRUIBWWTiIXDQZqdSCYajiVQmly+UoAxQAsznMqlENBxUqLDbOPAA//6zO1weNSOxZDpXKFWqtXoDoI7VSqmQSydjETU8Lof9318OsEYhSZ8gq5nJFyu1Rqvd6QJ0sNWoVYr5jBoyGeZyMMAxRAopTQqESRZK1Uar0xsMnwCG2Ou0GtVSgUQ4IAlEooAp2ZpBUQlFSZZrzU5/OBpPYTYFHA37nWatTCIaUkQGOCVdU1PcXlVLpPOlWrM7GE1m88USAOezyWjQbdZK+XRClbxuZgjHODXBcCyVK1bVnM6Xq/Vmu1nDcj5Vo1rMpWJhAg9KtkPVfolgplBpdAaj2WK12e0PxwPsNqvFbDToNCqFDAHJz5SMcTpUHSJYqrX6o+litT2czheAMx62q8V01G/VSgRCVKku/omMUR22jqfzBIeTOcnz9XZ/vuP1TGI+GRLIp+NMyTaYJynz+KSAWldbvdFsuSH5/PL69grPJDbL2ajXqhYziUhA8nl4BnzzS8FoMluqtQfj+Wp3uj6/vr1/vOPr8/W0W83Hg3atlE1Gg5Jfp+VK9c5wuljvz7eXt49PgA98uZ3368V02KmXctqMmUVWyqqVG92n6XJzuNxf3z+/EOH99X45bJbTp26jnEtFgzJZSI3SaCnKZsvt8fJM8Os/fn28PV+O2+VMgxn38vFKTNuLcfL7y/18eCAbvAze9S6zwO+foX8BXQ1/ARb4G7TCfwEL/B+yxH9CK/wvfrgbCAbvBpbYjyywI5q9J1viVGCBc4n2k5Fg2MnIAmcz80+HFjifmn9CtsAZ3fxbgvn3FPNvSubf1SxxW9RHAKkW36lPAjxmAAHARw7AZwYI2v2bcW6AYuBSA9YC" alt="" class="feature_icon_1 custom-animation1" data-pagespeed-url-hash="548474261">
	    <img src="data:image/webp;base64,UklGRvQFAABXRUJQVlA4TOgFAAAvSoASEJekoG0bJvwBlHD3R2Bi518hgAAoaNS2bcPAWyrvALTgR6CJJO4VgKwICNehrMkP4NpkQpaBCokCAKhKs97o7hSJIVjYymzQgYHdLXZ3d7d+Mu/uCN8HXET034EkqXHDQoBFyM4t6Qlf0sPX5PjySfiaOj6R+YbCpxBJe7+DSNqayQg53w8QyOkyFSRhwPl+ggBbkxCZiRhjDOz9hQYhBCLgIH2DmV/0N6V/UKCU/qIwAWn6LMz8YQIsRAFjxmACRabDQtFvCtREYsYkIMSMUaD0m0JB6opg4UgoomKJFMuIHAQhGDOxiArhAEGmIAj7RYEowcjkCqbEKhBKzBglCQIIflGUpmoY/0REcoVSpdZQrQ4Eo5SolAo5IuBGwZoChzAgUqk1Wr2BGk0gqIESrUaNgQCpySm0CUViqUyhUmt1BqPZYrUxO2OM2Rgl2GjQadUqhUwqFgnRmoIxzgRCkUQmV6q1eqPJYrM7sp0u7MbYhRkldpvFZNRr1Uq5TCISCjiFrpNEECaWyBQqjc5gttodTpfnrzfHR/w+ghn1uJwOu9Vs0GlUCplEjFBAknBAFTC1Vm+y2B1Oj9fnz8svKAxQWkgw8/u8HqfDbjHptWpAgWIyhzQRYAazNcvp8frzCgLFJaVljDFGCQ4U5Pm9HmeW1WwAVITU5NwfAWw2h8vrzy8sLimvDP6r5oBZZXlJMc33e10OG6yCP0gK4aFBoNmz3Tm5hcWlFcGauobGUJgx2kjqaoK4tLgwN8edbQcVGJPEQZ4bJJWrAPP48gMlFcGa+lDT/0i0BWMWoU2hehKsKAnk+zyAquRSbgzkEDngOU6p0ZttnBWVVtU0hJujre2xjk5CcIy1RpvDDTW0tIhTm1mvUXIU6IAUyiGvUOtMVoc7YWXB2lBztC3W1dPbP8AYJbgr1hZtDtUGyxLqdlhNOrUCclAK54DnOEuWK4ezunCkNdbdOzg0MjqGMRshg73dsdZIuI7THFeWhaMAB6eIHPR6s93pzQ2UctbW2Ts4MjYxNR2fIXhqYowN9na2cVoayPU67WY96BApnEPeaHV4/IUlVbXhSHtX39DYZHx2bmGRUoJZfHJsqK+rPRKurSop9HscViPkoBSdA3W705tfXFETirR19Q+PT88uLK2srW8wSpYWZqfHh/u72iKhmorifK/TDpTRKSpPzGKwcL402NDc2tk3PBGfW1rd3NrZ3cOMbq4uzcUnhvs6W5sbgqWcsxgSk6BSsAJ0A7nN6c1L+HA01js0Hp9f3tje2z84PMKM7m1vLM/Hx4d6Y9FwwuV5nTYgBZuhv3eoAo52+QpKgvXNbd2DY9Nzyxs7+4cnp2fnmNHD/Z3N5bnpscHutub6YEmBzwUOFgnQAlTEUgWYB8prQtFY78jk7FLCjk8vLq8YoxenZH8HL81OjvTGoqGa8gCYKqRioAAK5QSqWLP/5hVX1jW1dg2OxRdWt/ePzy6vb+/u7yi+PCP726sL8bHBrtamusrivL/ZVqjACU0mQCW/JNjwv71naGJ2aXPv8PTy5v7h8YlgdnN5eri3uTQ7MdTT/r8hWJIPFNACdQIjdSabK6eg9F9jJNY7MjW3srV/cnF9//j8gjEj99f0ZH9rZW5qpDcWafxXWpDjspl03EDElyOJ2F2+wrLqULSjf3R6YW3n4PTy9uH59Y0QzB7o5enBztrC9Gh/RzRUXVboc9nTFLcvUFYdbukcGIsvru8enl3dP728vX9Qgp/ur84Od9cX42MDnS3h6rKAz522+GGZWdzYOzoH5IMxQM6P9jYWZ2Dxu/n1wFeaV20Z+zw/UZqJz3OmvmX3jGXiW8aj734mfpE2M/2LxKPfSd78evPrP4Vn/3T8+v/lz6qAZ2sVXq2g+LOu49lqk1drYD6tzHm1X+DTLoZXeys+7fh4tQ/l0+6YT3t2Xp0k8Ol8g0+nLjw6C+LTCRXfzs3SDJAEohUzxhAMIspUQCgE5HwQg4gySCBa0b1IJpNE6vjySchwjQA=" alt="" class="feature_icon_2 custom-animation2" data-pagespeed-url-hash="842974182">
	    <img src="data:image/webp;base64,UklGRnoDAABXRUJQVlA4TG0DAAAvSAASECExaYrxnhH9j2kUEf0PQGojSZCU/F97mC8jsnoQzH8QSNp8/TtfiZKsBJIUoyeD+CyQ2fuHKPb0+W1hhDvjB7F/LJYIoR97RuwMDd97nh3vlnhOzxaMKXxlRYO2CByHxsMUK/g/wQhcLwpv3ibs+m9XaM022nn3itXZhzGAMozwMmmFaPABKUQ0ZJxmZ9gWz4sGSMWAMwqHSS8tIACy8gpiNOFt6CyrAXyjOYIgIHavPTU+Jp7hADWiUKcxhTlEI5UYnnVgN5+P8TFfy8FSpdaD68G36tgScrwD5EbYhwWTvBbHAyCQLbnnsB+zWUrVOjMQDdJFwaVA9rv6aVtJbumjfRbgkn8pSbQbrsFHYqdKtwWX2N8lpUikxWaImKIdjHd8Za9JSaT/tNtYgJaby1jH6ZEpXRKni/+Z8OaXnZa27o2JTmwskAUBDGpFlpiBBuiErrLrySi6qJH9YGFK8oHpNGVs7rAu0AgiOvapinSEdgfIe/idi1CP9Dj9V4NokXODwLGh1y8ZBUeEHhXBM9x+lILjjA88YKzFtIm0fdsDxqvVuUm0lxkEHhy9LTFoj3jhMdh7hBBLQFAxUaVexIjDChB5Skj3z9L9gdQDMwrD2ll9RgKe8XwD7juS3djNIdH/1UcFzd817lDHPJSHcB05shNd9oBgPnxCzMFbGDyL9iFWImLS63jW0QryK2HAQ0SBtzXCwdp1jMD4tgi0P6U9vyQj61D38lHt0Aey1btNGsJAFL1bV+rvlFFDbuhFOiSYo+eI1hlmwUJ3Zqt5Nu0WZhHTHh8zgqPXnuOYjF4iSU30cC5IsE0FjKBExRiM8Y4BmSpMWEDawOPOgD18xhI8O/9jAXDsjHVnC52W0wKLXohhBzLh4NQCAEmK0r0l6ZvsWM0SI0QV3SbSKqv6th11tJXm15hoQ2fDdWhMtEz68N1GTOJwgARyWmbHjiVEreMSIob0RQMymNwaqVBDTksI5SDBsNh1ab0QyXm2pB4PUcnJneEwBFuyGR8yeyp3H1wNAQTzo47iu7s4NDyw17tIEi/zsAoNosaNURhXIizGeRiiJEa8WeKWSyzYBZgPI9YGdAfZiBtz8g2jNTbauwWiSFMRvmihhg3w4JS3HaBHhHfDEf2OZ+vCFk3aq+d7x4eeJ87oy9gYAA==" alt="" class="feature_icon_3 custom-animation3" data-pagespeed-url-hash="3076442031">
	    <img src="data:image/webp;base64,UklGRpACAABXRUJQVlA4TIMCAAAvPUAPEKEyRPQ/RhHR/4CDRpIEZfwrBDtkumcfEBDzLyAo+D86h5KshM0oheh7+ET6E3H0ZLxevHBV9gXum+LFX6a+Dq4MoYavRHJTHQFawmP8G6wEyyNCeMAZLyvF7UyiQRbC0TpqfbMFKKaDcFtl1Cu4He/YJlIOqx7FoaXJKXHw4LYYA9GmmyHu2QH2hi+T6NL5Fnxmu2U94yDTQa2n7DBpZLSQElvXFCdzcPRbENJhAuDnoIz3ERyHrnB701jjpi6w7AZQNrplMg2O7UyUGgccwrdTaD0fUpDbusQkB9nLO/fw41R34nsaRWjGaaPjoCcpkoBRRFa7lVk8SK1GvmQDrsXKvwNKHSKJ3eQGsZK6htHIpmMka4n8BFQiOWDMcUALnYTY9lg9Vsm2BnuQPY6b25kYDrYnIYAJAgkmIxBBRyYBJrbjqEOXfyjxeDo0d59b4qCD5yylgtXrsPekp4aqfxzClAoJ4KBqcKUrvULYGhWcSrsLRMt82SKP15f7+btLUQI6yuSbjJitfECxAamh0jWhf+LRX2KzAMyEY2gSEODYvXLowUum8XRSp1Y0Jg9i7dgcJLZOZoAIrpDL0rP32BSlUbi8gXzp7Iaj2M2m8R6tUeaRHGJxvUUZLTJm6vZK7rK0E4gkk2yE0LdUgZLlVNZ1QNQPF2EadXDJPPhIZMjPGMJERKQARo5tESnSZWNFcsiKwFkmO7d1SkCT7qShB/qsztQC14pMfbu6GBHQIzbR8rnfUad8b2GokQSSZLxPKdMsTikzAtUFMlrV4Kg0Bg4SzIgOAzVpO3Vpz+hscjsaMqmGRxGxegC4Q9CzwfJufaLlC6PKdFTzvRG+ddMIAA==" alt="" class="feature_icon_4 custom-animation4" data-pagespeed-url-hash="3370941952">
	    <img src="/img/xEllipse_3.png.pagespeed.ic.BLwgGBnU0r.webp" alt="" class="feature_icon_5 custom-animation5" data-pagespeed-url-hash="3665441873">
	    <img src="/img/xEllipse_4.png.pagespeed.ic.Sr_eRsCf05.webp" alt="" class="feature_icon_6 custom-animation6" data-pagespeed-url-hash="3959941794">
	</div>
</template>
<style scoped>

img {
	max-width: 100%;
	vertical-align: middle;
    border-style: none;
    box-sizing: border-box;
}

.custom-animation1 {
  backface-visibility: hidden;
  animation: jumping 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all .9s ease 5s;
  user-select: none;
}

/* line 260, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_common.scss */
.custom-animation2 {
  backface-visibility: hidden;
  animation: jumping2 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 1s ease 3s;
  user-select: none;
}

/* line 268, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_common.scss */
.custom-animation3 {
  backface-visibility: hidden;
  animation: jumping3 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 7s ease 2s;
  user-select: none;
}

/* line 276, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_common.scss */
.custom-animation4 {
  backface-visibility: hidden;
  animation: jumping4 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 8s ease 4s;
  user-select: none;
}

/* line 284, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_common.scss */
.custom-animation5 {
  backface-visibility: hidden;
  animation: jumping5 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 8s ease 4s;
  user-select: none;
}

/* line 292, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_common.scss */
.custom-animation6 {
  backface-visibility: hidden;
  animation: jumping6 9s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 8s ease 4s;
  user-select: none;
}

@keyframes jumping {
  0% {
    transform: translateY(0px) translateX(0) rotate(0) scale(1);
    opacity: .8;
  }
  25% {
    transform: translateY(-10px) translateX(-10px) rotate(20deg) scale(0.8);
    opacity: .9;
  }
  50% {
    transform: translateY(-15px) translateX(-15px) rotate(10deg) scale(0.9);
    opacity: .8;
  }
  75% {
    transform: translateY(-20px) translateX(-20px) rotate(20deg) scale(0.75);
    opacity: .6;
  }
  85% {
    transform: translateY(-25px) translateX(-25px) rotate(20deg) scale(0.9);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(-15px) rotate(0) scale(0.95);
    opacity: .85;
  }
}

@keyframes jumping2 {
  0% {
    transform: translateY(0px) translateX(0) rotate(0) scale(1);
    opacity: .5;
  }
  25% {
    transform: translateY(-30px) translateX(10px) rotate(20deg) scale(0.8);
    opacity: .8;
  }
  50% {
    transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.7);
    opacity: .8;
  }
  75% {
    transform: translateY(30px) translateX(20px) rotate(90deg) scale(0.75);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(15px) rotate(0) scale(0.75);
    opacity: .9;
  }
}

@keyframes jumping3 {
  0% {
    transform: translateY(10px) translateX(0) rotate(0) scale(1);
    opacity: .9;
  }
  20% {
    transform: translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);
    opacity: .8;
  }
  40% {
    transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.75);
    opacity: .8;
  }
  40% {
    transform: translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5);
    opacity: 1;
  }
  80% {
    transform: translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);
    opacity: .6;
  }
  100% {
    transform: translateY(15px) translateX(15px) rotate(0) scale(0.95);
    opacity: .7;
  }
}

@keyframes jumping4 {
  0% {
    transform: translateY(-30px) translateX(40px) rotate(0) scale(1.2);
    opacity: .7;
  }
  25% {
    transform: translateY(-20px) translateX(0px) rotate(50deg) scale(0.6);
    opacity: .8;
  }
  50% {
    transform: translateY(15px) translateX(-55px) rotate(20deg) scale(0.5);
    opacity: .9;
  }
  75% {
    transform: translateY(30px) translateX(30px) rotate(50deg) scale(0.75);
    opacity: .7;
  }
  100% {
    transform: translateY(-15px) translateX(5px) rotate(0) scale(0.5);
    opacity: .9;
  }
}

@keyframes jumping5 {
  0% {
    transform: rotate(180deg);
    display: block;
  }
  100% {
    transform: rotate(30deg);
    display: block;
  }
}

@keyframes jumping6 {
  0% {
    transform: rotate(180deg) translate(-50px, 20px);
    display: block;
  }
  100% {
    transform: rotate(30deg) translate(0px, 0px);
    display: block;
  }
}

.banner_part .feature_icon_1 {
  position: absolute;
  right: 10%;
  top: 0%;
  z-index: -1;
}

@media (max-width: 991px) {
  /* line 96, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
  .banner_part .feature_icon_1 {
    display: none;
  }
}

/* line 106, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
.banner_part .feature_icon_2 {
  position: absolute;
  right: 30%;
  top: 10%;
  z-index: -1;
}

/* line 113, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
.banner_part .feature_icon_3 {
  position: absolute;
  right: 10%;
  top: 35%;
  z-index: -1;
}

@media (max-width: 991px) {
  /* line 113, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
  .banner_part .feature_icon_3 {
    display: none;
  }
}

/* line 123, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
.banner_part .feature_icon_4 {
  position: absolute;
  right: 30%;
  top: 45%;
  z-index: -1;
}

/* line 130, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
.banner_part .feature_icon_5 {
  position: absolute;
  right: 15%;
  bottom: 20%;
  z-index: -1;
}

/* line 137, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
.banner_part .feature_icon_6 {
  position: absolute;
  right: 50%;
  bottom: 5%;
  z-index: -1;
}

@media (max-width: 991px) {
  /* line 137, ../../01 cl html template/03_jun 2019/185 Ecobit SAAS html/sass/_banner.scss */
  .banner_part .feature_icon_6 {
    display: none;
    bottom: 0%;
  }
}

</style>