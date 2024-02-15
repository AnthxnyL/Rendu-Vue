<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="phone">

    <div class="phone-container">
      <RouterView />

    </div>
  
    <header>
      <div class="wrapper">
       
  
        <nav>
          <RouterLink to="/contact">
            <span class="nav-link contact">
              
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_109_20)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8037 19.1406C12.6026 19.6615 11.3216 19.9219 9.96094 19.9219C8.60026 19.9219 7.31933 19.6615 6.11816 19.1406C4.91699 18.6198 3.85742 17.9004 2.93945 16.9824C2.02148 16.0645 1.30208 15.0049 0.78125 13.8037C0.260417 12.6026 0 11.3216 0 9.96094C0 8.60026 0.260417 7.31933 0.78125 6.11816C1.30208 4.91699 2.01986 3.85742 2.93457 2.93945C3.84928 2.02148 4.90723 1.30208 6.1084 0.78125C7.30957 0.260417 8.5905 0 9.95117 0C11.3119 0 12.5944 0.260417 13.7988 0.78125C15.0033 1.30208 16.0645 2.02148 16.9824 2.93945C17.9004 3.85742 18.6198 4.91699 19.1406 6.11816C19.6615 7.31933 19.9219 8.60026 19.9219 9.96094C19.9219 11.3216 19.6615 12.6026 19.1406 13.8037C18.6198 15.0049 17.9004 16.0645 16.9824 16.9824C16.0645 17.9004 15.0049 18.6198 13.8037 19.1406ZM7.74414 18.1396C8.4733 18.3382 9.21224 18.4375 9.96094 18.4375C10.7031 18.4375 11.4404 18.3382 12.1729 18.1396C12.9053 17.9411 13.5938 17.6546 14.2383 17.2803C14.8828 16.906 15.4557 16.4551 15.957 15.9277C15.6055 15.3678 15.1253 14.891 14.5166 14.4971C13.9079 14.1032 13.2145 13.8037 12.4365 13.5986C11.6585 13.3935 10.8333 13.291 9.96094 13.291C9.07552 13.291 8.24218 13.3952 7.46094 13.6035C6.67968 13.8118 5.98795 14.1129 5.38574 14.5068C4.78352 14.9007 4.30664 15.3744 3.95508 15.9277C4.45638 16.4551 5.03092 16.906 5.67871 17.2803C6.32649 17.6546 7.01497 17.9411 7.74414 18.1396ZM8.25684 11.1377C8.76139 11.46 9.32942 11.6244 9.96094 11.6309C10.5859 11.6374 11.1507 11.4795 11.6553 11.1572C12.1598 10.8349 12.5618 10.3939 12.8613 9.83398C13.1608 9.27408 13.3105 8.64583 13.3105 7.94922C13.3105 7.29166 13.1608 6.68945 12.8613 6.14258C12.5618 5.5957 12.1582 5.15788 11.6504 4.8291C11.1426 4.50032 10.5794 4.33594 9.96094 4.33594C9.33594 4.33594 8.76953 4.50032 8.26172 4.8291C7.7539 5.15788 7.35026 5.5957 7.05078 6.14258C6.7513 6.68945 6.60482 7.29166 6.61133 7.94922C6.61133 8.64583 6.75944 9.27083 7.05566 9.82422C7.35188 10.3776 7.75228 10.8154 8.25684 11.1377Z" fill=""/>
                </g>
                <defs>
                <clipPath id="clip0_109_20">
                <rect width="19.9219" height="19.9316" fill=""/>
                </clipPath>
                </defs>
                </svg>

              </div>
              Contact
            </span>
            
          </RouterLink>
          <RouterLink to="/">
            <span class="nav-link journal">
              <div class="nav-icon">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_17640)">
                <path d="M5.77543 11.0156C5.58011 11.0156 5.41735 10.9505 5.28714 10.8203C5.15693 10.6901 5.09183 10.5273 5.09183 10.332C5.09183 10.1432 5.15693 9.98371 5.28714 9.85352C5.41735 9.72331 5.58011 9.6582 5.77543 9.6582H10.1992V3.75C10.1992 3.5612 10.2644 3.40169 10.3946 3.27148C10.5248 3.14127 10.6843 3.07617 10.8731 3.07617C11.0684 3.07617 11.2311 3.14127 11.3614 3.27148C11.4916 3.40169 11.5567 3.5612 11.5567 3.75V10.332C11.5567 10.5273 11.4916 10.6901 11.3614 10.8203C11.2311 10.9505 11.0684 11.0156 10.8731 11.0156H5.77543ZM10.8828 19.9219C12.2436 19.9219 13.5245 19.6615 14.7256 19.1406C15.9268 18.6198 16.9864 17.9004 17.9043 16.9824C18.8223 16.0645 19.5417 15.0049 20.0625 13.8037C20.5834 12.6026 20.8438 11.3216 20.8438 9.96094C20.8438 8.60026 20.5834 7.31933 20.0625 6.11816C19.5417 4.91699 18.8223 3.85742 17.9043 2.93945C16.9864 2.02148 15.9252 1.30208 14.7207 0.78125C13.5163 0.260417 12.2338 0 10.8731 0C9.5124 0 8.23148 0.260417 7.03031 0.78125C5.82913 1.30208 4.77119 2.02148 3.85648 2.93945C2.94176 3.85742 2.22399 4.91699 1.70316 6.11816C1.18232 7.31933 0.921906 8.60026 0.921906 9.96094C0.921906 11.3216 1.18232 12.6026 1.70316 13.8037C2.22399 15.0049 2.94339 16.0645 3.86136 16.9824C4.77933 17.9004 5.8389 18.6198 7.04007 19.1406C8.24124 19.6615 9.52217 19.9219 10.8828 19.9219Z" fill="" fill-opacity="0.85"/>
                </g>
                <defs>
                <clipPath id="clip0_2_17640">
                <rect width="19.9219" height="19.9316" fill="" transform="translate(0.921906)"/>
                </clipPath>
                </defs>
                </svg>
              </div>
              Journal
            </span>
          </RouterLink>

          <RouterLink to="/clavier">
            <span class="nav-link keyboard">
              <div class="nav-icon">
                <svg width="21" height="20" viewBox="0 0 34 34" fill="" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#"/>
                <circle cx="5" cy="17" r="5" fill=""/>
                <circle cx="5" cy="29" r="5" fill=""/>
                <circle cx="17" cy="5" r="5" fill=""/>
                <circle cx="17" cy="17" r="5" fill=""/>
                <circle cx="17" cy="29" r="5" fill=""/>
                <circle cx="29" cy="5" r="5" fill=""/>
                <circle cx="29" cy="17" r="5" fill=""/>
                <circle cx="29" cy="29" r="5" fill=""/>
                </svg>
              </div>
              Clavier
            </span>
          </RouterLink>
        </nav>
      </div>
    </header>

  </div>

</template>

<style scoped>

  .phone {

    position: relative;
    border-radius: 30px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    max-height: 726px;
    margin: 0 auto;
    width: 100%;
    height: 726px;
    background-color : #252525;
  }

  .phone .phone-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    background-color: #000000;
    border-radius: 30px 30px 0 0;
  }

  .phone-container::-webkit-scrollbar {
    display: none;
  }

  header {
    display : flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: #171717;
    border-radius: 0 0 30px 30px;
  }


  .wrapper {
    width: 100%;
    margin: 0 auto;
  }

  .nav-link {
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap : 6px;
  }

  .nav-link .nav-icon {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .nav-icon svg {
    width: 100%;
    height: 100%;
    fill : grey;
  }

  .nav-link:hover .nav-icon svg {
    fill : #0A84FF;
  }

  .nav-link:hover {
    color : #0A84FF;
  }


  .wrapper nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  nav a {
    text-decoration: none;
    color: grey;
  }

  nav a:focus {
    color : #0A84FF;
  }

  nav a:focus .nav-icon svg {
    fill : #0A84FF;
  }


  @media screen and (max-width : 480px) {
    .phone {
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }

    .phone .phone-container {
      border-radius: 0;
    }

    header {
      border-radius: 0;
    }
  }

</style>
