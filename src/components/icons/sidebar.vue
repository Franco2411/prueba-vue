<template>    
        <aside :class="`${is_expanded && 'is-expanded'}`">
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
                <router-link class="accesos" to="/">
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
        background-color: var(--vt-c-white-soft);
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

                .material-symbols-outlined {
                    font-size: 2rem;
                    color: var(--vt-c-black-soft);
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
                }
            }

            .button, .text {
                opacity: 1;
                color: var(--vt-c-primaryColor);
            }

            h3 {
                opacity: 1;
                color: var(--vt-c-text-dark-2);
            }

            .accesos {
                .material-symbols-outlined {
                    margin-right: 1rem;
                }
            }
        }

        .menu-toggle {
            border: none;
            background-color: var(--vt-c-white-soft);
        }

        .menu-toggle:hover {
            cursor: pointer;
        }

        @media (max-width: 550px) {
            position:fixed;
            z-index: 99;
            
        }

    }

</style>