import { useRouter } from 'expo-router'

import InfoSvg from '../../assets/images/info-circle.svg';
import NetworkSvg from '../../assets/images/network.svg';
import LaptopSvg from '../../assets/images/laptop.svg';
import CrossroadSvg from '../../assets/images/crossroad.svg';
import WebsiteSvg from '../../assets/icons/website_icon.svg';
import InstagramSvg from '../../assets/icons/instagram_icon.svg';
import LinkedinSvg from '../../assets/icons/linkedin_icon.svg';
import FacebookSvg from '../../assets/icons/facebook_icon.svg';

//this is a component that we use to load svg images.
const SvgImage = ({name, width, height, fill}) => {
    const router = useRouter();

    const svgs = {
        InfoSvg: <InfoSvg width={width} height={height} fill={fill} />,
        NetworkSvg: <NetworkSvg width={width} height={height} fill={fill} />,
        LaptopSvg: <LaptopSvg width={width} height={height} fill={fill} />,
        CrossroadSvg: <CrossroadSvg width={width} height={height} fill={fill} />,
        WebsiteSvg: <WebsiteSvg width={width} height={height} fill={fill} />,
        LinkedinSvg: <LinkedinSvg width={width} height={height} fill={fill} />,
        InstagramSvg: <InstagramSvg width={width} height={height} fill={fill} />,
        FacebookSvg: <FacebookSvg width={width} height={height} fill={fill} />,
    };
        
    return svgs[name] || null;
}

export default SvgImage;