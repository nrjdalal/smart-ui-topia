import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  Album,
  ArrowUpRight,
  BookIcon,
  BookOpenIcon,
  Check,
  ChevronDown,
  ChevronRight,
  Clipboard,
  Component,
  Copy,
  Edit,
  FolderTreeIcon,
  Leaf,
  LifeBuoyIcon,
  Loader,
  MessagesSquare,
  Newspaper,
  Plus,
  RotateCw,
  ScanEye,
  TerminalIcon,
  UsersRound,
  WebhookIcon,
  X,
} from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;
export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export const Icons = {
  album: Album,
  arrowUpRight: ArrowUpRight,
  copy: Copy,
  component: Component,
  check: Check,
  chevronDown: ChevronDown,
  clipboard: Clipboard,
  book: BookIcon,
  bookOpen: BookOpenIcon,
  api: WebhookIcon,
  edit: Edit,
  sdk: FolderTreeIcon,
  chat: MessagesSquare,
  news: Newspaper,
  arrow: ChevronRight,
  leaf: Leaf,
  loader: Loader,
  life: LifeBuoyIcon,
  plus: Plus,
  x: X,
  refresh: RotateCw,
  teams: UsersRound,
  scan: ScanEye,

  logo: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.844 21.3359C28.4826 21.7771 28.135 22.0781 27.8013 22.239C27.5203 22.4834 27.0385 22.9977 26.3559 23.7817C26.2377 23.7657 26.1454 23.7305 26.0789 23.676C25.6075 23.2899 25.3141 22.9082 25.1989 22.5311C24.7116 22.0411 24.5051 21.7507 24.5793 21.6601C24.2085 21.2251 24.0405 20.9864 24.0751 20.9441C24.1147 20.8957 23.9445 20.6351 23.5643 20.1622C23.6051 20.0138 23.6063 19.9137 23.5678 19.862L23.459 19.7729L23.3568 19.7498L23.3336 19.852L14.2743 30.9122C13.9971 31.2507 13.7859 31.3605 13.6409 31.2417L11.3926 29.4001C11.2233 29.2615 11.1882 29.1318 11.2872 29.0109C11.6882 28.5213 12.0678 27.984 12.426 27.3987C12.8797 26.9928 13.3417 26.5027 13.812 25.9285L14.9407 24.5505C15.1585 24.2846 15.2311 24.1219 15.1586 24.0625L15.1224 24.0328C15.0223 24.0317 14.9542 24.0163 14.9179 23.9866C14.8306 23.8342 14.3098 23.2865 13.3555 22.3432C13.4198 22.2647 13.1507 21.9028 12.548 21.2577C12.6124 21.1792 12.4158 20.8767 11.9582 20.3504C12.0324 20.2598 11.8984 20.0288 11.5562 19.6576C11.5838 19.4883 11.4454 19.2134 11.1411 18.8328C11.2252 18.7301 11.1374 18.5168 10.8776 18.1929C10.9617 18.0901 10.886 17.8867 10.6503 17.5826C10.7196 17.498 10.6681 17.3143 10.4956 17.0317C10.5451 16.9713 10.4892 16.7437 10.3278 16.3489C10.3674 16.3006 10.3422 16.1587 10.2522 15.9234C10.3055 15.8459 10.2803 15.7041 10.1765 15.4979C10.226 15.4375 10.2086 15.2616 10.1241 14.9702C10.1736 14.9098 10.1604 14.7778 10.0847 14.5744C10.1342 14.514 10.1189 14.36 10.0388 14.1126C10.118 14.0159 10.1126 13.8499 10.0226 13.6146C10.082 13.5421 10.0942 13.3299 10.0592 12.9781C10.1384 12.8814 10.1451 12.7253 10.0792 12.5098C10.1683 12.401 10.1926 12.1987 10.1521 11.903C10.2957 11.7277 10.32 11.5254 10.225 11.2961C10.4082 11.0725 10.4644 10.856 10.3936 10.6465C10.5729 10.3289 10.6248 10.0684 10.549 9.86494C10.7767 9.58693 10.8802 9.28796 10.8595 8.96803C11.0823 8.69605 11.1682 8.44325 11.1172 8.2096C11.3845 7.88323 11.5375 7.52382 11.5762 7.13137C11.9431 6.6341 12.1258 6.23843 12.1243 5.94435C12.6144 5.34601 12.8686 4.88771 12.887 4.56945C12.9277 4.42106 13.0917 4.17159 13.3788 3.82105C13.5966 3.55512 14.0418 3.67739 14.7143 4.18787C14.9205 4.19512 15.3381 4.37565 15.9673 4.72944C16.0591 4.70366 16.2537 4.76203 16.551 4.90456C16.7686 5.08278 16.7387 5.34111 16.4615 5.67957L16.2864 6.26324C15.8706 6.77092 15.6482 7.21494 15.6194 7.59531C15.268 8.02442 15.1348 8.35966 15.2198 8.60102C14.8436 9.06035 14.7401 9.35932 14.9093 9.49794C14.6172 9.85452 14.5038 10.1656 14.5691 10.4311C14.3315 10.7212 14.2874 10.9477 14.4368 11.1105L14.3477 11.2192C14.2388 11.3522 14.2145 11.5545 14.2748 11.8261C14.1411 11.9892 14.1069 12.2036 14.1722 12.4691C14.0881 12.5719 14.0758 12.7841 14.1356 13.1057C14.0366 13.2265 14.0398 13.3705 14.1452 13.5377C14.0314 13.6767 14.0467 13.8306 14.1912 13.9995C14.0773 14.1385 14.0926 14.2924 14.2371 14.4612C14.0985 14.6305 14.1259 14.7943 14.3193 14.9527C14.272 15.0351 14.3366 15.3507 14.5133 15.8994C14.5798 15.9538 14.6435 16.1473 14.7043 16.4799C14.8131 16.569 14.9108 16.7703 14.9975 17.0836C15.1513 17.2904 15.2897 17.5653 15.4126 17.9084C15.6928 18.1581 15.8181 18.3011 15.7884 18.3374C15.7092 18.4341 15.9783 18.7959 16.5958 19.4229C16.5216 19.5135 16.8852 19.9326 17.6868 20.6801C17.667 20.7042 17.6857 20.7801 17.7428 20.9077C17.8895 20.8764 17.9951 20.8215 18.0595 20.7429L21.8317 16.1375C21.9555 15.9864 21.8876 15.5268 21.628 14.7588C21.6825 14.6923 21.6452 14.5406 21.5161 14.3036C21.5458 14.2673 21.5075 13.9936 21.4011 13.4823C21.4259 13.4521 21.3897 13.2003 21.2927 12.727C21.3521 12.6544 21.3368 12.5005 21.2468 12.2652C21.2814 12.2229 21.2684 11.8689 21.2078 11.2032C21.2025 10.8151 21.2147 10.6029 21.2444 10.5667C21.289 10.5123 21.2681 10.4144 21.1819 10.2731C21.3161 10.0599 21.3107 9.89391 21.1657 9.77509C21.2647 9.65422 21.2791 9.46403 21.2089 9.20454C21.3326 9.05345 21.347 8.86326 21.2521 8.63399C21.3511 8.51312 21.3754 8.31085 21.3249 8.02718C21.424 7.9063 21.4483 7.70403 21.3978 7.42037L21.5464 7.23905C21.9883 7.21731 22.3665 7.22411 22.6809 7.25946C22.7254 7.20507 22.8936 7.22165 23.1855 7.30921C23.235 7.24877 23.3889 7.23346 23.6472 7.26329C24.3811 7.21806 24.7813 7.22268 24.8477 7.27713C24.9668 7.63724 24.9699 8.00333 24.857 8.37541C24.9296 8.43482 24.9251 8.61291 24.8436 8.9097C24.904 8.9592 24.9116 9.1472 24.8663 9.47369C24.8786 10.2108 24.9058 10.5967 24.9482 10.6314C24.8838 10.7099 24.8914 10.8979 24.9709 11.1954C24.9313 11.2437 24.9466 11.3976 25.0169 11.6571C24.9772 11.7055 25.0025 11.8473 25.0925 12.0826C25.1516 12.4542 25.1614 12.6642 25.1218 12.7126C25.1883 12.767 25.2958 13.1783 25.4444 13.9462C25.535 14.0205 25.5559 14.1184 25.5069 14.2398C25.5794 14.2992 25.6738 14.5785 25.79 15.0777C25.8565 15.1321 25.8916 15.2619 25.8954 15.4669C26.1261 15.7771 26.2018 15.9805 26.1226 16.0772C26.2495 16.1812 26.3637 16.4363 26.4652 16.8425C26.6465 16.9911 26.7322 17.1824 26.7221 17.4166C26.9518 17.6047 27.0638 17.8378 27.0582 18.1159C27.2576 18.2793 27.4806 18.6235 27.7271 19.1486C27.9205 19.307 28.0787 19.5578 28.2016 19.9008C28.8576 20.5795 29.0915 21.0337 28.9034 21.2634L28.844 21.3359Z"
        fill="currentColor"
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>menu icon</title>
      <path
        d="M3.19995 4.80005H12.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.19995 11.2H12.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  xCom: ({ ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g>
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),

  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg
      viewBox="0 0 256 154"
      width="256"
      height="154"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-2.778%"
          y1="32%"
          x2="100%"
          y2="67.556%"
          id="gradient"
        >
          <stop stopColor="#2298BD" offset="0%"></stop>
          <stop stopColor="#0ED7B5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
        fill="url(#gradient)"
      ></path>
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      style={{ color: "currentcolor" }}
      className="mr-2 animate-spin"
    >
      <g clipPath="url(#clip0_2393_1490)">
        <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
        <path
          opacity="0.5"
          d="M8 16V12"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.9"
          d="M3.29773 1.52783L5.64887 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.1"
          d="M12.7023 1.52783L10.3511 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.4"
          d="M12.7023 14.472L10.3511 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.6"
          d="M3.29773 14.472L5.64887 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.2"
          d="M15.6085 5.52783L11.8043 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.7"
          d="M0.391602 10.472L4.19583 9.23598"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.3"
          d="M15.6085 10.4722L11.8043 9.2361"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.8"
          d="M0.391602 5.52783L4.19583 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2393_1490">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),

  automatedBacklog: (props: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9408 8.91426L12.9576 8.65557C12.9855 8.4419 13 8.22314 13 8C13 7.77686 12.9855 7.5581 12.9576 7.34443L14.9408 7.08573C14.9799 7.38496 15 7.69013 15 8C15 8.30987 14.9799 8.61504 14.9408 8.91426ZM14.4688 5.32049C14.2328 4.7514 13.9239 4.22019 13.5538 3.73851L11.968 4.95716C12.2328 5.30185 12.4533 5.68119 12.6214 6.08659L14.4688 5.32049ZM12.2615 2.4462L11.0428 4.03204C10.6981 3.76716 10.3188 3.54673 9.91341 3.37862L10.6795 1.53116C11.2486 1.76715 11.7798 2.07605 12.2615 2.4462ZM8.91426 1.05917L8.65557 3.04237C8.4419 3.01449 8.22314 3 8 3C7.77686 3 7.5581 3.01449 7.34443 3.04237L7.08574 1.05917C7.38496 1.02013 7.69013 1 8 1C8.30987 1 8.61504 1.02013 8.91426 1.05917ZM5.32049 1.53116L6.08659 3.37862C5.68119 3.54673 5.30185 3.76716 4.95716 4.03204L3.73851 2.4462C4.22019 2.07605 4.7514 1.76715 5.32049 1.53116ZM2.4462 3.73851L4.03204 4.95716C3.76716 5.30185 3.54673 5.68119 3.37862 6.08659L1.53116 5.32049C1.76715 4.7514 2.07605 4.22019 2.4462 3.73851ZM1.05917 7.08574C1.02013 7.38496 1 7.69013 1 8C1 8.30987 1.02013 8.61504 1.05917 8.91426L3.04237 8.65557C3.01449 8.4419 3 8.22314 3 8C3 7.77686 3.01449 7.5581 3.04237 7.34443L1.05917 7.08574ZM1.53116 10.6795L3.37862 9.91341C3.54673 10.3188 3.76716 10.6981 4.03204 11.0428L2.4462 12.2615C2.07605 11.7798 1.76715 11.2486 1.53116 10.6795ZM3.73851 13.5538L4.95716 11.968C5.30185 12.2328 5.68119 12.4533 6.08659 12.6214L5.32049 14.4688C4.7514 14.2328 4.22019 13.9239 3.73851 13.5538ZM7.08574 14.9408L7.34443 12.9576C7.5581 12.9855 7.77686 13 8 13C8.22314 13 8.4419 12.9855 8.65557 12.9576L8.91427 14.9408C8.61504 14.9799 8.30987 15 8 15C7.69013 15 7.38496 14.9799 7.08574 14.9408ZM10.6795 14.4688L9.91341 12.6214C10.3188 12.4533 10.6981 12.2328 11.0428 11.968L12.2615 13.5538C11.7798 13.9239 11.2486 14.2328 10.6795 14.4688ZM13.5538 12.2615L11.968 11.0428C12.2328 10.6981 12.4533 10.3188 12.6214 9.91341L14.4688 10.6795C14.2328 11.2486 13.924 11.7798 13.5538 12.2615Z"
      ></path>
    </svg>
  ),
  customViews: (props: IconProps) => (
    <svg width="16" height="16" viewBox="-1 -1 15 15" fill="#8A8F98" {...props}>
      <path d="M10.5714 7C10.5714 8.97245 8.97245 10.5714 7 10.5714L6.99975 3.42857C8.9722 3.42857 10.5714 5.02755 10.5714 7Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
      ></path>
    </svg>
  ),
  discussion: (props: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98" {...props}>
      <path d="M8 1C4.13401 1 1 3.262 1 7C1 8.83211 1.75288 10.3096 2.97581 11.3401C2.22526 13.7801 2.07619 15 2.52874 15C2.93754 15 3.96564 14.2301 5.61306 12.6902C6.35802 12.8937 7.16181 13 8 13C11.866 13 15 10.6678 15 7C15 3.33217 11.866 1 8 1Z"></path>
    </svg>
  ),
  issues: (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#8A8F98" {...props}>
      <path d="M10.25 0C12.3211 0 14 1.67893 14 3.75V8.60502C14 9.07085 13.8143 9.51745 13.484 9.84591L9.81859 13.4909C9.49069 13.817 9.04705 14 8.58461 14H3.75C1.67893 14 0 12.3211 0 10.25V3.75C0 1.67893 1.67893 0 3.75 0H10.25ZM10.25 1.5H3.75C2.50736 1.5 1.5 2.50736 1.5 3.75V10.25C1.5 11.4926 2.50736 12.5 3.75 12.5H6.999L7 9.75C7 8.28747 8.1417 7.0916 9.58248 7.00502L9.75 7H12.5V3.75C12.5 2.50736 11.4926 1.5 10.25 1.5ZM12.5 8.5H9.75C9.05964 8.5 8.5 9.05964 8.5 9.75L8.499 12.5H8.58461C8.65068 12.5 8.71405 12.4739 8.7609 12.4273L12.4263 8.78229C12.4735 8.73537 12.5 8.67157 12.5 8.60502V8.5Z"></path>
    </svg>
  ),

  cloudIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 4C8.7764 4 6.0632 6.17816 5.24923 9.14303C2.8139 9.70961 1 11.8925 1 14.5C1 17.5376 3.46243 20 6.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 11.8925 21.1861 9.70961 18.7508 9.14303C17.9368 6.17816 15.2236 4 12 4Z" />
    </svg>
  ),
  copyIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      fill="none"
    >
      <path
        d="M16 8V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H8M11.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V11.2C22 10.0799 22 9.51984 21.782 9.09202C21.5903 8.71569 21.2843 8.40973 20.908 8.21799C20.4802 8 19.9201 8 18.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V18.8C8 19.9201 8 20.4802 8.21799 20.908C8.40973 21.2843 8.71569 21.5903 9.09202 21.782C9.51984 22 10.0799 22 11.2 22Z"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  moreIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10ZM16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
      />
    </svg>
  ),

  percentIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.86585 2.1543C10.6719 0.615232 13.3281 0.615232 15.1341 2.1543C15.5877 2.54085 16.1517 2.77446 16.7458 2.82186C19.1111 3.01062 20.9894 4.88889 21.1781 7.25422C21.2255 7.84829 21.4591 8.41226 21.8457 8.86585C23.3848 10.6719 23.3848 13.3281 21.8457 15.1341C21.4591 15.5877 21.2255 16.1517 21.1781 16.7458C20.9894 19.1111 19.1111 20.9894 16.7458 21.1781C16.1517 21.2255 15.5877 21.4591 15.1341 21.8457C13.3281 23.3848 10.6719 23.3848 8.86585 21.8457C8.41226 21.4591 7.84829 21.2255 7.25422 21.1781C4.88889 20.9894 3.01062 19.1111 2.82186 16.7458C2.77446 16.1517 2.54085 15.5877 2.1543 15.1341C0.615232 13.3281 0.615232 10.6719 2.1543 8.86585C2.54085 8.41226 2.77446 7.84829 2.82186 7.25422C3.01062 4.88889 4.88889 3.01062 7.25422 2.82186C7.84829 2.77446 8.41226 2.54085 8.86585 2.1543ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711ZM7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9ZM13.5 15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 14.1716 16.5 15C16.5 15.8284 15.8284 16.5 15 16.5C14.1716 16.5 13.5 15.8284 13.5 15Z"
      />
    </svg>
  ),
  receiptIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.7587 2H15.2413C16.0463 1.99999 16.7106 1.99998 17.2518 2.0442C17.8139 2.09012 18.3306 2.18868 18.816 2.43598C19.5686 2.81947 20.1805 3.43139 20.564 4.18404C20.8113 4.66938 20.9099 5.18608 20.9558 5.74818C21 6.28937 21 6.95372 21 7.75868V21C21 21.3761 20.7889 21.7204 20.4538 21.8911C20.1186 22.0618 19.716 22.03 19.4118 21.8087L17.2789 20.2575L15.3747 21.7809C15.0229 22.0623 14.5262 22.0738 14.1618 21.8087L12 20.2365L9.83817 21.8087C9.47378 22.0738 8.97715 22.0623 8.62531 21.7809L6.72111 20.2575L4.58817 21.8087C4.28399 22.03 3.88139 22.0618 3.54622 21.8911C3.21105 21.7204 3 21.3761 3 21V7.75869C2.99999 6.95373 2.99998 6.28936 3.0442 5.74818C3.09012 5.18608 3.18868 4.66938 3.43598 4.18404C3.81947 3.43139 4.43139 2.81947 5.18404 2.43598C5.66938 2.18868 6.18608 2.09012 6.74818 2.0442C7.28936 1.99998 7.95375 1.99999 8.7587 2ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L11 11.0858L9.70711 9.79289C9.31658 9.40237 8.68342 9.40237 8.29289 9.79289C7.90237 10.1834 7.90237 10.8166 8.29289 11.2071L10.2929 13.2071C10.6834 13.5976 11.3166 13.5976 11.7071 13.2071L16.2071 8.70711Z"
      />
    </svg>
  ),
  sparklesIcon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z" />
      <path d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z" />
    </svg>
  ),
  parrentSubs: (props: IconProps) => (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="#8A8F98" {...props}>
      <path d="M11.0002 6C13.2094 6 15.0002 7.79086 15.0002 10C15.0002 12.2091 13.2094 14 11.0002 14C8.79111 14 7.00024 12.2091 7.00024 10C7.00024 7.79086 8.79111 6 11.0002 6ZM10.7461 0C12.8172 0 14.4961 1.67893 14.4961 3.75V4.24561C14.4961 4.65982 14.1603 4.99561 13.7461 4.99561C13.3319 4.99561 12.9961 4.65982 12.9961 4.24561V3.75C12.9961 2.50736 11.9887 1.5 10.7461 1.5H4.74609C3.50345 1.5 2.49609 2.50736 2.49609 3.75V9.97046C2.49609 11.2131 3.50345 12.2205 4.74609 12.2205H6.05259C6.46681 12.2205 6.80259 12.5562 6.80259 12.9705C6.80259 13.3847 6.46681 13.7205 6.05259 13.7205H4.74609C2.67503 13.7205 0.996094 12.0415 0.996094 9.97046V3.75C0.996094 1.67893 2.67503 0 4.74609 0H10.7461ZM11.0002 7.25488L10.8985 7.26173C10.5657 7.30688 10.3022 7.57032 10.2571 7.90311L10.2502 8.00488V9.25088L9.00104 9.25L8.89926 9.25674C8.56642 9.30153 8.3027 9.56469 8.2572 9.89744L8.25024 9.9992L8.25698 10.101C8.30178 10.4338 8.56494 10.6975 8.89769 10.743L8.99945 10.75L10.2502 10.7509V12.0036L10.2571 12.1054C10.3022 12.4382 10.5657 12.7016 10.8985 12.7468L11.0002 12.7536L11.102 12.7468C11.4348 12.7016 11.6982 12.4382 11.7434 12.1054L11.7502 12.0036V10.7529L12.9994 10.7542L13.1012 10.7475C13.4341 10.7027 13.6978 10.4395 13.7433 10.1068L13.7502 10.005L13.7435 9.90326C13.6987 9.57042 13.4355 9.3067 13.1028 9.2612L13.001 9.25424L11.7502 9.25288V8.00488L11.7434 7.90311C11.6982 7.57032 11.4348 7.30688 11.102 7.26173L11.0002 7.25488Z"></path>
    </svg>
  ),
  workflows: (props: IconProps) => (
    <svg width="16" height="16" viewBox="-1 -1 15 15" fill="#8A8F98" {...props}>
      <path d="M10.5714 7C10.5714 8.97245 8.97245 10.5714 7 10.5714L6.99975 3.42857C8.9722 3.42857 10.5714 5.02755 10.5714 7Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
      ></path>
    </svg>
  ),
};

export const SparkleSvg = ({
  position,
  className,
}: {
  position: Position;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "absolute z-10 size-4 fill-black",
        position === "top-right" && "-right-2 -top-2",
        position === "bottom-left" && "-bottom-2 -left-2",
        position === "bottom-right" && "-bottom-2 -right-2",
        position === "top-left" && "-left-2 -top-2",
        className,
      )}
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
    </svg>
  );
};

export function LinearLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path
        fill="#5E6AD2"
        d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"
      />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g>
        Twitter
        <path
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
}

export function AnimationsDev(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
    >
      <path
        d="M0 0 C5.28 0 10.56 0 16 0 C16 5.28 16 10.56 16 16 C10.72 16 5.44 16 0 16 C0 10.72 0 5.44 0 0 Z "
        fill="#F0DB58"
        transform="translate(0,0)"
      />
      <path
        d="M0 0 C4.62 0 9.24 0 14 0 C14 1.98 14 3.96 14 6 C13 7 13 7 10.3125 7.1328125 C9.219375 7.13023437 8.12625 7.12765625 7 7.125 C5.906875 7.12757813 4.81375 7.13015625 3.6875 7.1328125 C1 7 1 7 0 6 C0 4.02 0 2.04 0 0 Z "
        fill="#FDF3B6"
        transform="translate(1,0)"
      />
      <path
        d="M0 0 C0.66 0 1.32 0 2 0 C2 1.98 2 3.96 2 6 C-3.28 6 -8.56 6 -14 6 C-13.67 4.68 -13.34 3.36 -13 2 C-6.6 0.76923077 -6.6 0.76923077 -3.5625 1.9375 C-3.046875 2.288125 -2.53125 2.63875 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z "
        fill="#F3CB22"
        transform="translate(14,10)"
      />
      <path
        d="M0 0 C4.62 0 9.24 0 14 0 C14 0.99 14 1.98 14 3 C9.38 3 4.76 3 0 3 C0 2.01 0 1.02 0 0 Z "
        fill="#FCEC89"
        transform="translate(1,0)"
      />
    </svg>
  );
}

export function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      fill="currentColor"
      viewBox="3 3 18 18"
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
    </svg>
  );
}

export const shadcnLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

export function create({
  icon: Icon,
}: {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div className="rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm">
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
