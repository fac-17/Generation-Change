import React from "react";
import { Link } from "react-router-dom";
import dishes from "./data";

const ProjectCards = () => {
  const dishItems = dishes.map(dishItems => (
    <li key={dishItems.id} className="project-card">
      <p className="project-card__category">{dishItems.category}</p>
      <p className="project-card__title">{dishItems.title}</p>
      <div className="project-card__icon-info-outer-wrap">
        <div className="project-card__icon-info-individual-wrap">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M25.7966 7.25816C25.5104 6.97349 25.0282 6.95709 24.7199 7.22132L23.179 8.54207C23.1541 8.52969 23.1298 8.51792 23.1071 8.50742C22.8951 8.40969 22.6507 8.38353 22.4279 8.51933L22.4584 8.45324C22.5071 8.34772 22.4539 8.22566 22.3395 8.18071C22.2415 8.14213 22.1309 8.17307 22.0704 8.249C22.0782 8.18441 22.0826 8.11888 22.0826 8.05236C22.0826 7.08585 21.2338 6.30225 20.1867 6.30225C19.1397 6.30225 18.2909 7.08576 18.2909 8.05236C18.2909 8.11888 18.2953 8.18446 18.3031 8.249C18.2427 8.17307 18.1321 8.14218 18.034 8.18071C17.9197 8.22566 17.8664 8.34768 17.9151 8.45324L17.9457 8.51933C17.7228 8.38349 17.4783 8.4096 17.2664 8.50738C17.1054 8.58158 16.8878 8.70036 16.6559 8.91889L14.0353 7.31207C13.6848 7.09715 13.212 7.18527 12.9791 7.50871C12.7463 7.83224 12.8417 8.26874 13.1922 8.48366C18.6261 11.8156 18.3227 11.6306 18.3602 11.6507C18.1769 13.0339 18.4015 11.8507 17.164 17.7484C17.14 17.8629 17.1727 17.9813 17.253 18.0713C17.3334 18.1613 17.4531 18.2138 17.5795 18.2138C17.6908 18.2138 17.8173 18.2138 17.9559 18.2138L17.031 22.5655C16.9205 23.0854 17.3513 23.572 17.9292 23.572C18.3573 23.572 18.7398 23.2929 18.8253 22.8904L19.8193 18.2138C20.1236 18.2138 20.4325 18.2138 20.7344 18.2138L21.4837 22.8523C21.5513 23.2711 21.9415 23.5719 22.3868 23.5719C22.9486 23.5719 23.3743 23.1116 23.2921 22.6034L22.5831 18.2137C22.6578 18.2137 22.7288 18.2137 22.7939 18.2137C22.9204 18.2137 23.0402 18.1616 23.1206 18.0715C23.201 17.9814 23.2335 17.8629 23.2094 17.7483C21.972 11.8511 22.203 13.0829 21.9906 11.4799L23.9305 9.81725C24.0094 9.83243 24.0885 9.85081 24.1677 9.87476C24.213 9.88845 24.2627 9.87584 24.2941 9.84275C24.3254 9.80961 24.3322 9.7624 24.3114 9.72284C24.2825 9.668 24.2532 9.61611 24.2237 9.566L25.7568 8.25191C26.0649 7.98777 26.0829 7.54279 25.7966 7.25816ZM21.0824 10.3391C20.2795 10.3391 19.8544 10.3391 18.9718 10.3391L17.965 9.72172C17.9711 9.71933 17.9782 9.71759 17.9838 9.71497C18.1561 9.63551 18.2737 9.49578 18.3231 9.33744L18.3558 9.4085C18.3923 9.48748 18.4755 9.53487 18.563 9.53487C18.5924 9.53487 18.6223 9.52953 18.651 9.51819C18.7653 9.47323 18.8186 9.35122 18.7699 9.24566L18.7419 9.18491C19.0896 9.56253 19.6076 9.80239 20.1866 9.80239C20.7656 9.80239 21.2837 9.56253 21.6314 9.18491L21.6034 9.24566C21.5546 9.35117 21.6079 9.47323 21.7222 9.51819C21.751 9.52953 21.781 9.53487 21.8103 9.53487C21.8978 9.53487 21.981 9.48748 22.0174 9.4085L22.0502 9.33744C22.0636 9.3807 22.0819 9.42256 22.1054 9.46212L21.0824 10.3391Z"
                fill="#292929"
              />
              <path
                d="M6.04766 9.39226C7.09738 9.39226 7.94834 8.60675 7.94834 7.63778C7.94834 6.66881 7.09738 5.8833 6.04766 5.8833C4.99794 5.8833 4.14697 6.66881 4.14697 7.63778C4.14697 8.60675 4.99794 9.39226 6.04766 9.39226Z"
                fill="#292929"
              />
              <path
                d="M12.2317 5.87464C12.4849 5.56039 12.4142 5.11625 12.0738 4.88258C11.7334 4.64891 11.2522 4.71411 10.999 5.02841L7.03248 9.9513C6.81996 9.9513 5.20715 9.9513 4.98235 9.9513L1.36161 5.88383C1.09231 5.58139 0.608269 5.53756 0.280477 5.78614C-0.0472635 6.03472 -0.0946422 6.48157 0.17465 6.7841L4.00486 11.0869V15.7949L1.80858 22.4738C1.66071 22.9235 1.93574 23.3986 2.42283 23.5351C2.91104 23.6718 3.42504 23.4169 3.57256 22.9681L5.61878 16.7461H6.33272L6.99708 22.8066C7.04832 23.2741 7.50043 23.6148 8.00692 23.5674C8.51336 23.5201 8.88243 23.1028 8.83114 22.6353C8.03099 15.3361 8.08659 15.825 8.07359 15.7615V11.0354L12.2317 5.87464Z"
                fill="#292929"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="26" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Age</p>
          <div>
            {dishItems.minimum_age}-{dishItems.maximum_age}
          </div>
        </div>
        <div className="project-card__icon-info-individual-wrap">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3636 7.71429C18.1745 7.71429 19.6255 5.99143 19.6255 3.85714C19.6255 1.72286 18.1745 0 16.3636 0C14.5527 0 13.0909 1.72286 13.0909 3.85714C13.0909 5.99143 14.5527 7.71429 16.3636 7.71429ZM7.63636 7.71429C9.44727 7.71429 10.8982 5.99143 10.8982 3.85714C10.8982 1.72286 9.44727 0 7.63636 0C5.82545 0 4.36364 1.72286 4.36364 3.85714C4.36364 5.99143 5.82545 7.71429 7.63636 7.71429ZM7.63636 10.2857C5.09455 10.2857 0 11.79 0 14.7857V16.7143C0 17.4214 0.490909 18 1.09091 18H14.1818C14.7818 18 15.2727 17.4214 15.2727 16.7143V14.7857C15.2727 11.79 10.1782 10.2857 7.63636 10.2857ZM16.3636 10.2857C16.0473 10.2857 15.6873 10.3114 15.3055 10.35C15.3273 10.3629 15.3382 10.3886 15.3491 10.4014C16.5927 11.4686 17.4545 12.8957 17.4545 14.7857V16.7143C17.4545 17.1643 17.3782 17.6014 17.2582 18H22.9091C23.5091 18 24 17.4214 24 16.7143V14.7857C24 11.79 18.9055 10.2857 16.3636 10.2857Z"
              fill="#292929"
            />
          </svg>
          <p>Group Size</p>
          <div>{dishItems.group_size}</div>
        </div>
        <div className="project-card__icon-info-individual-wrap">
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 1.3125C5.94316 1.3125 1.4375 5.42637 1.4375 10.5C1.4375 15.5736 5.94316 19.6875 11.5 19.6875C17.0568 19.6875 21.5625 15.5736 21.5625 10.5C21.5625 5.42637 17.0568 1.3125 11.5 1.3125ZM11.5 18.1289C6.88652 18.1289 3.14453 14.7123 3.14453 10.5C3.14453 6.2877 6.88652 2.87109 11.5 2.87109C16.1135 2.87109 19.8555 6.2877 19.8555 10.5C19.8555 14.7123 16.1135 18.1289 11.5 18.1289Z"
              fill="#292929"
            />
            <path
              d="M15.4239 13.0963L12.221 10.9819V5.90625C12.221 5.81602 12.1401 5.74219 12.0413 5.74219H10.9609C10.8621 5.74219 10.7812 5.81602 10.7812 5.90625V11.5541C10.7812 11.6074 10.8082 11.6566 10.8554 11.6874L14.5704 14.1606C14.6513 14.214 14.7636 14.1976 14.822 14.1258L15.4644 13.326C15.5228 13.2501 15.5048 13.1476 15.4239 13.0963V13.0963Z"
              fill="#292929"
            />
          </svg>

          <p>Duration</p>
          <div>{dishItems.session_duration_hours} hours</div>
        </div>
        <div className="project-card__icon-info-individual-wrap">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1875 3.59375H13.9062V2.34375C13.9062 2.25781 13.8359 2.1875 13.75 2.1875H12.6562C12.5703 2.1875 12.5 2.25781 12.5 2.34375V3.59375H7.5V2.34375C7.5 2.25781 7.42969 2.1875 7.34375 2.1875H6.25C6.16406 2.1875 6.09375 2.25781 6.09375 2.34375V3.59375H2.8125C2.4668 3.59375 2.1875 3.87305 2.1875 4.21875V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V4.21875C17.8125 3.87305 17.5332 3.59375 17.1875 3.59375ZM16.4062 16.4062H3.59375V8.98438H16.4062V16.4062ZM3.59375 7.65625V5H6.09375V5.9375C6.09375 6.02344 6.16406 6.09375 6.25 6.09375H7.34375C7.42969 6.09375 7.5 6.02344 7.5 5.9375V5H12.5V5.9375C12.5 6.02344 12.5703 6.09375 12.6562 6.09375H13.75C13.8359 6.09375 13.9062 6.02344 13.9062 5.9375V5H16.4062V7.65625H3.59375Z"
              fill="#292929"
            />
          </svg>

          <p>Repeats</p>
          <div>{dishItems.session_frequency_per_week} a week</div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="">
        <Link to={{ pathname: "/details" }}>
          {dishItems.length ? (
            dishItems
          ) : (
            <li className="project-card">No results found</li>
          )}
        </Link>
      </ul>
    </div>
  );
};

export default ProjectCards;
