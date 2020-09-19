import { chakra } from "@chakra-ui/core";
import React from "react";

const Logo = (props: any) => {
  return (
    <chakra.svg height="8" width="auto" {...props}>
      <path
        d="M25.3603 7.32692L22.8295 5.97632L20.8757 7.11712L23.4721 8.58582C23.8786 8.80872 23.8786 9.39872 23.4721 9.62172L15.1848 14.3554C14.7127 14.6176 14.4243 15.1159 14.4243 15.6666V27.3501C14.4243 27.8877 15.0012 28.2156 15.4602 27.9533L25.4652 22.1706C25.9897 21.869 26.3175 21.3051 26.3175 20.7019V8.91362C26.3175 8.25792 25.9504 7.64162 25.3603 7.32692Z"
        fill="#5384EE"
      />
      <path
        d="M24.0134 2.85639L13.5757 0.115894C13.0381 -0.0284055 12.4611 0.0502948 11.9759 0.338795L2.06268 6.05589C1.62998 6.30509 1.26278 6.61979 0.961182 7.00009L9.05178 9.12429L12.4349 10.0029C12.9725 10.1471 13.5363 10.0684 14.0215 9.79309L24.1708 4.02349C24.6691 3.74809 24.5642 3.00069 24.0134 2.85639Z"
        fill="#5384EE"
      />
      <path
        d="M11.2114 14.0841L8.1824 12.3663L0.1574 7.84241C0.0525001 8.19651 0 8.55051 0 8.93081V15.6969V20.3389C0 20.9683 0.340901 21.5584 0.891701 21.8731L10.9098 27.6558C11.3688 27.918 11.9457 27.5902 11.9457 27.0526V15.3298C11.9457 14.8315 11.6704 14.3463 11.2114 14.0841Z"
        fill="#5384EE"
      />
      <path
        d="M41.3958 23H37.8557V4.25H41.3958V23ZM43.7639 16.2739C43.7639 14.9637 44.0162 13.7959 44.5208 12.7705C45.0253 11.7451 45.7496 10.9517 46.6936 10.3901C47.6458 9.8286 48.7485 9.5479 50.0017 9.5479C51.7839 9.5479 53.2366 10.0931 54.3596 11.1836C55.4908 12.2741 56.1215 13.7552 56.2517 15.627L56.2761 16.5303C56.2761 18.5566 55.7105 20.1842 54.5794 21.4131C53.4482 22.6338 51.9304 23.2441 50.0261 23.2441C48.1218 23.2441 46.6 22.6338 45.4607 21.4131C44.3295 20.1924 43.7639 18.5322 43.7639 16.4326V16.2739ZM47.2918 16.5303C47.2918 17.7835 47.5278 18.7438 47.9998 19.4111C48.4718 20.0703 49.1472 20.3999 50.0261 20.3999C50.8806 20.3999 51.5479 20.0744 52.0281 19.4233C52.5082 18.7642 52.7483 17.7144 52.7483 16.2739C52.7483 15.0451 52.5082 14.0929 52.0281 13.4175C51.5479 12.742 50.8725 12.4043 50.0017 12.4043C49.1391 12.4043 48.4718 12.742 47.9998 13.4175C47.5278 14.0848 47.2918 15.1224 47.2918 16.5303ZM70.3511 16.5181C70.3511 18.634 69.8992 20.286 68.9959 21.4741C68.0925 22.6541 66.8311 23.2441 65.2117 23.2441C63.7794 23.2441 62.636 22.6948 61.7815 21.5962L61.6228 23H58.449V4.25H61.9768V10.9761C62.7906 10.0239 63.8608 9.5479 65.1873 9.5479C66.7986 9.5479 68.06 10.1419 68.9714 11.3301C69.891 12.5101 70.3511 14.1743 70.3511 16.3228V16.5181ZM66.823 16.2617C66.823 14.9271 66.6114 13.9546 66.1882 13.3442C65.7651 12.7257 65.1344 12.4165 64.2962 12.4165C63.1731 12.4165 62.4 12.8763 61.9768 13.7959V19.0083C62.4081 19.936 63.1894 20.3999 64.3206 20.3999C65.4599 20.3999 66.2086 19.8384 66.5667 18.7153C66.7376 18.1782 66.823 17.3604 66.823 16.2617ZM71.9861 16.2739C71.9861 14.9637 72.2391 13.7959 72.7431 12.7705C73.2481 11.7451 73.9721 10.9517 74.9161 10.3901C75.8681 9.8286 76.9711 9.5479 78.2241 9.5479C80.0071 9.5479 81.4591 10.0931 82.5821 11.1836C83.7131 12.2741 84.3441 13.7552 84.4741 15.627L84.4991 16.5303C84.4991 18.5566 83.9331 20.1842 82.8021 21.4131C81.6711 22.6338 80.1531 23.2441 78.2491 23.2441C76.3441 23.2441 74.8231 22.6338 73.6831 21.4131C72.5521 20.1924 71.9861 18.5322 71.9861 16.4326V16.2739ZM75.5141 16.5303C75.5141 17.7835 75.7501 18.7438 76.2221 19.4111C76.6941 20.0703 77.3701 20.3999 78.2491 20.3999C79.1031 20.3999 79.7701 20.0744 80.2511 19.4233C80.7311 18.7642 80.9711 17.7144 80.9711 16.2739C80.9711 15.0451 80.7311 14.0929 80.2511 13.4175C79.7701 12.742 79.0951 12.4043 78.2241 12.4043C77.3621 12.4043 76.6941 12.742 76.2221 13.4175C75.7501 14.0848 75.5141 15.1224 75.5141 16.5303ZM91.4321 13.7349L93.6541 9.792H97.4261L93.6661 16.2617L97.5851 23H93.8001L91.4441 18.8496L89.1011 23H85.3041L89.2231 16.2617L85.4751 9.792H89.2591L91.4321 13.7349Z"
        fill="#5384EE"
      />
    </chakra.svg>
  );
};

export default Logo;