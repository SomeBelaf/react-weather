import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { style } from "./style";


export default function Background(props) {
  const classes = style();

  const { cardDescription } = props;
  const changeCloudPosition = (mediaValue, firstVal, secondVal) => {
    if (window.matchMedia(`(max-width: ${mediaValue}px)`).matches) {
      return firstVal.join(" ");
    } else {
      return secondVal.join(" ");
    }
  };

  return (
    <Box className={classes.wrapper}>
      <svg className={classes.clouds}>
        <g id="layer1">
          <svg width="100%" height="320" viewBox="0 0 10 450">
            <g className={classes.cloud_light}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from={changeCloudPosition(576, [-4000, -50], [-4000, 0])} // -50 для мобильных
                to={changeCloudPosition(576, [4000, -50], [4000, 0])} // -50 для мобильных
                begin="0s"
                dur="380s"
                repeatCount="indefinite"
                additive="sum"
              />
              <path d="M -4532 1 C -978 -10 795 3 4505 1 C 4750 36 4539 190 4527 191 C 4475 234 4278 244 4147 189 C 4050 237 3912 226 3846 179 C 3709 258 3489 247 3387 175 C 3326 262 2919 248 2831 166 C 2711 242 2449 232 2270 162 C 2108 232 1917 227 1845 159 C 1739 233 1417 218 1293 155 C 1156 265 1026 200 949 163 C 811 270 622 182 600 160 C 400 223.876 200 223.876 0 160 C -200 223.876 -400 223.876 -570 148 C -632 195 -945 253 -1180 161 C -1320 250 -1541 236 -1644 178 C -1666 212 -1891 227 -1916 166 C -2016 219 -2186 214 -2245 164 C -2332 220 -2430 211 -2505 184 C -2575 214 -2666 214 -2755 157 C -2824 217 -2916 218 -3020 170 C -3096 205 -3207 214 -3347 177 C -3417 213 -3533 209 -3639 178 C -3763 213 -3899 209 -4023 170 C -4121 209 -4275 209 -4362 177 C -4402 197 -4559 214 -4631 158 C -4694 95 -4683 -10 -4532 1"></path>
            </g>
          </svg>
        </g>
        <g id="layer2">
          <svg width="100%" height="200" viewBox="0 0 10 210">
            <g className={classes.cloud_dark}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from={changeCloudPosition(576, [-2550, -50], [-2550, -8])}
                to={changeCloudPosition(576, [2550, -50], [2550, -8])}
                begin="0s"
                dur="360s"
                repeatCount="indefinite"
                additive="sum"
              />
              <path d="M -2588 152 C -2703 60 -2621 3 -2581 -1 L -508 0 C -321 0 476 2 2526 -1 C 2609 -1 2632 53 2555 112 C 2517 150 2450 164 2390 128 C 2347 149 2285 153 2228 129 C 2167 159 2135 173 2059 133 C 2018 161 1953 167 1905 133 C 1877 161 1750 163 1721 128 C 1624 202 1465 128 1464 124 S 1339 201 1175 129 C 1136 178 942 196 849 128 C 789 169 691 193 575 143 C 483 200 362 177 313 140 C 255 189 100 176.617 0 130 C -100 176.617 -200 176.617 -307 134 C -362 190 -543 209 -635 140 C -710 197 -810 210 -953 147 C -1089 187 -1230 222 -1360 136 C -1461 200 -1579 199 -1719 144 C -1817 175 -1912 202 -2012 146 C -2059 182 -2181 212 -2307 150 C -2404 191 -2516 199 -2587 152"></path>
            </g>
          </svg>
          <svg width="100%" height="200" viewBox="0 0 10 210">
            <g className={classes.cloud_dark}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from={changeCloudPosition(576, [2550, -50], [-550, -8])}
                to={changeCloudPosition(576, [-2550, -50], [-2550, -8])}
                begin="0s"
                dur="300s"
                repeatCount="indefinite"
                additive="sum"
              />
              <path d="M -2588 152 C -2703 60 -2621 3 -2581 -1 L -508 0 C -321 0 476 2 2526 -1 C 2609 -1 2632 53 2555 112 C 2517 150 2450 164 2390 128 C 2347 149 2285 153 2228 129 C 2167 159 2135 173 2059 133 C 2018 161 1953 167 1905 133 C 1877 161 1750 163 1721 128 C 1624 202 1465 128 1464 124 S 1339 201 1175 129 C 1136 178 942 196 849 128 C 789 169 691 193 575 143 C 483 200 362 177 313 140 C 255 189 100 176.617 0 130 C -100 176.617 -200 176.617 -307 134 C -362 190 -543 209 -635 140 C -710 197 -810 210 -953 147 C -1089 187 -1230 222 -1360 136 C -1461 200 -1579 199 -1719 144 C -1817 175 -1912 202 -2012 146 C -2059 182 -2181 212 -2307 150 C -2404 191 -2516 199 -2587 152"></path>
            </g>
          </svg>
        </g>
        <g id="layer3">
          <svg width="100%" height="490" viewBox="0 0 10 400">
            <g className={classes.cloud_darkest}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from={changeCloudPosition(576, [-4000, -50], [-4000, -17])}
                to={changeCloudPosition(576, [4000, -50], [4000, -17])}
                begin="0s"
                dur="340s"
                repeatCount="indefinite"
                additive="sum"
              />
              <path d="M -4025 1 C -218 -3 444 0 4024 -1 C 4071 11 4081 52 4032 92 C 4006 126 3855 128 3825 96 C 3769 139 3716 115 3692 95 C 3668 133 3483 141 3409 95 C 3386 140 3294 118 3262 98 C 3245 124 3120 136 3071 92 C 3043 146 2879 120 2854 103 C 2845 125 2764 131 2731 99 C 2710 129 2598 131 2536 99 C 2505 145 2395 124 2377 97 C 2360 142 2165 138 2122 97 C 2113 131 1978 135 1957 100 C 1915 140 1729 132 1709 103 C 1705 129 1603 139 1563 105 C 1559 134 1389 144 1352 103 C 1336 127 1239 125 1169 103 C 1145 124 1011 132 933 100 C 901 133 828 137 762 108 C 703 141 600 131 522 99 C 464 134 348 149 309 95 C 200 141.3473 100 141.3473 0 100 C -100 141.3473 -200 141.3473 -300 100 C -313 148 -476 173 -552 100 C -609 143 -750 146 -795 103 C -811 130 -1040 172 -1090 104 C -1149 144 -1213 139 -1258 105 C -1323 147 -1473 149 -1519 102 C -1585 134 -1703 137 -1730 110 C -1755 137 -2007 144 -2076 104 C -2122 135 -2194 127 -2223 105 C -2300 129 -2441 129 -2500 104 C -2560 123 -2649 124 -2693 103 C -2789 125 -2905 125 -2950 99 C -2967 119 -3069 119 -3097 102 C -3167 117 -3263 125 -3308 100 C -3390 124 -3479 119 -3514 98 C -3526 122 -3590 128 -3628 99 C -3645 127 -3821 127 -3875 93 C -3938 126 -4012 117 -4053 95 C -4108 54 -4080 0 -4026 2"></path>
            </g>
          </svg>
          <svg width="100%" height="490" viewBox="0 0 10 400" fill="#b0b0b0">
            <g className={classes.cloud_darker}>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from={changeCloudPosition(576, [4000, -50], [4000, -20])}
                to={changeCloudPosition(576, [-4000, -50], [-4000, -20])}
                begin="0s"
                dur="360s"
                repeatCount="indefinite"
                additive="sum"
              />
              <path d="M -4025 1 C -218 -3 444 0 4024 -1 C 4071 11 4081 52 4032 92 C 4006 126 3855 128 3825 96 C 3769 139 3716 115 3692 95 C 3668 133 3483 141 3409 95 C 3386 140 3294 118 3262 98 C 3245 124 3120 136 3071 92 C 3043 146 2879 120 2854 103 C 2845 125 2764 131 2731 99 C 2710 129 2598 131 2536 99 C 2505 145 2395 124 2377 97 C 2360 142 2165 138 2122 97 C 2113 131 1978 135 1957 100 C 1915 140 1729 132 1709 103 C 1705 129 1603 139 1563 105 C 1559 134 1389 144 1352 103 C 1336 127 1239 125 1169 103 C 1145 124 1011 132 933 100 C 901 133 828 137 762 108 C 703 141 600 131 522 99 C 464 134 348 149 309 95 C 200 141.3473 100 141.3473 0 100 C -100 141.3473 -200 141.3473 -300 100 C -313 148 -476 173 -552 100 C -609 143 -750 146 -795 103 C -811 130 -1040 172 -1090 104 C -1149 144 -1213 139 -1258 105 C -1323 147 -1473 149 -1519 102 C -1585 134 -1703 137 -1730 110 C -1755 137 -2007 144 -2076 104 C -2122 135 -2194 127 -2223 105 C -2300 129 -2441 129 -2500 104 C -2560 123 -2649 124 -2693 103 C -2789 125 -2905 125 -2950 99 C -2967 119 -3069 119 -3097 102 C -3167 117 -3263 125 -3308 100 C -3390 124 -3479 119 -3514 98 C -3526 122 -3590 128 -3628 99 C -3645 127 -3821 127 -3875 93 C -3938 126 -4012 117 -4053 95 C -4108 54 -4080 0 -4026 2"></path>
            </g>
          </svg>
        </g>
      </svg>
      <Box className={classes.canvasWrapper}>
        <canvas id="canvasRain" className={classes.canvas}></canvas>
        <canvas id="canvasLightning" className={classes.canvas}></canvas>
        <canvas id="canvasDrizzle" className={classes.canvas}></canvas>
      </Box>
    </Box>
  );
}

Background.propTypes = {
  cardDescription: PropTypes.string,
};
