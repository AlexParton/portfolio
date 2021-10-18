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
    margin: 25px 0;
    border: 1px dotted;
    border-radius: 25px;
    padding: 5px 10px;
    }

    .social-item img {
        width: 30px;
    }

    .social-item h3 {
        width: calc(100% - 40px);
        font-size: 15px;
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
        }

        .social-item h3 {
            font-size: 16px;
        }
    }
    </style>
    
    <div class="contact-wrapper">
        <div class='h1-wrapper'>
            <h1>MAKE CONTACT</h1>
            <p>Thanks for getting this far.</p>
            <p>I hope you have enjoyed my portfolio site.</p>
            <p>If you want to get in touch you can reach me at:</p>
            <div class="social">
                <a href="https://twitter.com/hair_none" class="social-item">
                    <img src="assets/logos/logo-twitter.svg" alt="twitter">
                    <h3>{'.hair{display:none}'} <span>@ Twitter</span></h3>
                </a>
                <a href="https://linkedin.com/in/alejandro-morales-6b571612a" class="social-item">
                    <img src="assets/logos/logo-linkedin.svg" alt="twitter">
                    <h3>Alejandro Morales <span>@ LinkedIn</span></h3>
                </a>
            </div>
        </div>
    </div>