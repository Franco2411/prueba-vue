<template>    
    <div v-if="!is_expanded" class="menu-toggle-wrap-mobile">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
    
    <aside :class="{'is-expanded': is_expanded}">
        <div class="logo">
            <img src="@/assets/images/ic_launcher.png" alt="Logo">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="accesos" to="/">
                <span class="material-symbols-outlined">
                    home
                </span>
                <span class="text">Inicio</span>
            </router-link>
            <router-link class="accesos" to="/about">
                <span class="material-symbols-outlined">
                    rubric
                </span>
                <span class="text">Registros</span>
            </router-link>
            <router-link class="accesos" to="/login">
                <span class="material-symbols-outlined">
                    logout
                </span>
                <span class="text">Cerrar sesión</span>
            </router-link>
        </div>
    </aside>

    <div v-if="is_expanded" class="overlay" @click="ToggleMenu"></div>
</template>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
is_expanded.value = !is_expanded.value
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    height: 100vh;
    background-color: var(--color-background-soft);
    color: var(--vt-c-primaryColor);
    margin-right: 2rem;
    overflow: hidden;
    padding: 1rem;
    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;


        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-in;
            background-color: var(--color-background-soft);


            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--color-heading);
                transition: 0.2s ease-in;

            }

            &:hover {
                .material-symbols-outlined {
                    color: var(--vt-c-primaryColor);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button, .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        color: var(--vt-c-text-dark-2);
    }


    .menu {
        margin: 0 -1rem;

        .accesos {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--vt-c-primaryColor);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--vt-c-primaryColor);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--vt-c-text-dark-2);

                .material-symbols-outlined, .text {
                    color: var(--vt-c-accentColor);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--vt-c-primaryColor);
            }
        }


    }

    &.is-expanded {
        width: 250px;

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
                color: var(--vt-c-primaryColor);
                background-color: var(--color-background-soft);

            }
        }

        .button, .text {
            opacity: 1;
            color: var(--vt-c-primaryColor);
        }

        h3 {
            opacity: 1;
            color: darkgray;
        }

        .accesos {
            .material-symbols-outlined {
                margin-right: 1rem;

            }
        }

        .menu-toggle-wrap-mobile {
            display: hidden;
        }
    }

    .menu-toggle {
        border: none;
        background-color: var(--color-background-soft);
        color: var(--vt-c-primaryColor);
    }

    .menu-toggle:hover {
        cursor: pointer;
    }

    /*@media (max-width: 550px) {
        position:fixed;
        z-index: 99;
        
    }*/

}

.menu-toggle-wrap-mobile {
    display: none;
    background-color: var(--color-background);
    color: var(--color-text);
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    margin-bottom: 20px;
    transition: 0.3s ease-out;
}

@media (max-width: 550px) {
    .menu-toggle-wrap-mobile {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 0.5rem;
        background-color: var(--color-background-soft);
        transition: 0.3s ease-out;

        .menu-toggle {
            width: 2.5rem;
            border: none;
            background-color: var(--color-background-soft);
            color: var(--vt-c-primaryColor);
        }
    }

    /* Ocultar el aside por defecto en móviles */
    aside {
        display: none;
        position: fixed;
        transition: 0.3s ease-out;
        z-index: 99;
        width: 250px;
        height: 100vh;
        background-color: var(--color-background-soft);

    }

    /* Mostrar el aside cuando esté expandido */
    .is-expanded {
        display: block; 
        transition: 0.3s ease-out;

        &.menu-toggle span {
            background-color: var(--color-background-soft);
        }

    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 98;
    }
}

</style>