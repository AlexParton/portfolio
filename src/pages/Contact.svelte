<script>
    import { createEventDispatcher, onDestroy } from 'svelte'
    const dispatch = createEventDispatcher()
    
    onDestroy(() => {
            dispatch('unmount')
        })
    </script>
    
    <style>
    .contact-wrapper {
        margin: 35px 0 0;
        padding-top: var(--Vpadding);
    }
    
    .h1-wrapper {
            padding: 0 var(--Hpadding);
    }

    .social-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        margin: 5vw 0;
        border: 1px dotted;
        border-radius: 25px;
        padding: 0 4vw;
        height: 12vw;
        gap: 2vw;
    }

    .social-item img {
        width: 10%;
        max-width: 25px;
    }

    .social-item h3 {
        width: calc(90% - 2vw);
        font-size: 4vw;
    }

    .spacer {
        margin: 5vw 0;
    }

    @media(min-width:768px) {
        .contact-wrapper {
            padding:var(--padding);
            margin-top: 80px;
        }

        .h1-wrapper {
            padding: 0;
        }

        .social-item {
            width: 350px;
            padding: 10px 20px;
            margin: 20px 0;
            gap: 10px;
            height: 50px;
        }

        .social-item h3 {
            font-size: 16px;
        }
    }

    @media(min-width:1000px) {
        .social-item:hover {
            border: 1px solid black;
        }
    }
    </style>
    
    <div class="contact-wrapper">
        <div class='h1-wrapper'>
            <h1>MAKE CONTACT</h1>
            <div class="spacer">
                <p>Thanks for getting this far.</p>
                <p>I hope you have enjoyed my portfolio site.</p>
                <p>If you want to get in touch you can reach me at:</p>
            </div>
           
            <div class="social">
                <a href="mailto:alexpartondev@gmail.com?subject=Making Contact!" target="_blank" class="social-item">
                    <img src="assets/logos/email.svg" alt="email">
                    <h3>alexpartondev@gmail.com</h3>
                </a>
                <a href="https://linkedin.com/in/alejandro-morales-6b571612a" target="_blank" class="social-item">
                    <img src="assets/logos/logo-linkedin.svg" alt="linkedin">
                    <h3>Alejandro Morales</h3>
                </a>
            </div>
        </div>
    </div>