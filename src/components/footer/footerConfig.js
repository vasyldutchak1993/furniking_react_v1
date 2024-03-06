import { FaTwitter,FaFacebookF,FaInstagram,FaPinterestP} from "react-icons/fa";

export const footerConfig = [
    {
        menuTitle: "Help",
        menuItems: [
            {href: '/privacy_policy', text: 'Privacy Policy'},
            {href: '/shipping_&_delivery', text: 'Shipping & Delivery'},
            {href: '/refund_policy', text: 'Refund Policy'},
            {href: '/track_your', text: 'Track Your  Order'},
        ]
    }, {
        menuTitle: "Store",
        menuItems: [
            {href: '/privacy_policy', text: 'Furniture'},
            {href: '/tabble', text: 'Tabble'},
            {href: '/soffa', text: 'Soffa'},
            {href: '/other', text: 'Other'},
        ]
    }, {
        menuTitle: "Supports",
        menuItems: [
            {href: '/feedbcak', text: 'Feedbcak'},
            {href: '/contact_us', text: 'Contact us'},
            {href: '/download_app', text: 'Download app'},
            {href: '/terms', text: 'Terms conditins'},
        ]
    },
]
export const socialLinksConfig = [
    {href: '/facebook', icon: FaFacebookF,alt:"facebook"},
    {href: '/instagram', icon: FaInstagram  ,alt:"instagram"},
    {href: '/twitter', icon: FaTwitter,alt:"twitter"},
    {href: '/pinterest', icon: FaPinterestP ,alt:"pinterest"},
]