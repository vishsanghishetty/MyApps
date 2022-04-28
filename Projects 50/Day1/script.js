const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        removeActivePanels()
        panel.classList.add('active');

    })
})

const removeActivePanels = () => {

    panels.forEach((panel) => {

        panel.classList.remove('active');

    })


}
