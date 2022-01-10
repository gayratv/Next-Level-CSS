/*
 * Copyright (c) 2021. Write by Gayrat
 */

const $toggle = document.querySelector('input')
const $grid = document.querySelector(`[data-main]`)


const toggleBg = () => {
    if ($toggle.checked === true) {
        $grid.classList.add('is-active')
    } else {
        $grid.classList.remove('is-active')
    }
}

$toggle.addEventListener('click', toggleBg)


