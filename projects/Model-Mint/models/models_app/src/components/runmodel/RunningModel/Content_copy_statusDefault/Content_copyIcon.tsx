import { memo, SVGProps } from 'react';

const Content_copyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.11765 21.1765C1.53529 21.1765 1.03676 20.9691 0.622059 20.5544C0.207353 20.1397 0 19.6412 0 19.0588V5.29412C0 4.99412 0.101471 4.74265 0.304412 4.53971C0.507353 4.33676 0.758824 4.23529 1.05882 4.23529C1.35882 4.23529 1.61029 4.33676 1.81324 4.53971C2.01618 4.74265 2.11765 4.99412 2.11765 5.29412V19.0588H12.7059C13.0059 19.0588 13.2574 19.1603 13.4603 19.3632C13.6632 19.5662 13.7647 19.8176 13.7647 20.1176C13.7647 20.4176 13.6632 20.6691 13.4603 20.8721C13.2574 21.075 13.0059 21.1765 12.7059 21.1765H2.11765ZM6.35294 16.9412C5.77059 16.9412 5.27206 16.7338 4.85735 16.3191C4.44265 15.9044 4.23529 15.4059 4.23529 14.8235V2.11765C4.23529 1.53529 4.44265 1.03676 4.85735 0.622059C5.27206 0.207353 5.77059 0 6.35294 0H15.8824C16.4647 0 16.9632 0.207353 17.3779 0.622059C17.7926 1.03676 18 1.53529 18 2.11765V14.8235C18 15.4059 17.7926 15.9044 17.3779 16.3191C16.9632 16.7338 16.4647 16.9412 15.8824 16.9412H6.35294ZM6.35294 14.8235H15.8824V2.11765H6.35294V14.8235Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Content_copyIcon);
export { Memo as Content_copyIcon };