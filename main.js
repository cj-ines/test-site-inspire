import './style.scss'


const onEnterElements = document.querySelectorAll('.on-enter-animation');
const onEnterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animation');
    }
  })
});

onEnterElements.forEach(element => onEnterObserver.observe(element))


const staggerElements = document.querySelectorAll('.photo-grid>img')


const staggerElementsObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
            entry.target.classList.add('animation');
            console.log(entry, i)
        }, 200 * (i + 1))
         
      }
    })
  });

staggerElements.forEach(elem => staggerElementsObserver.observe(elem))

let done = false
const numberAnimation = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        let interval;
        if (entry.isIntersecting && !done) {
            const number = +entry.target.innerText;
            let counter  = 0;
            interval = setInterval(() => {
                if (counter <= number) {
                    counter = counter + 60
                    entry.target.innerText = (counter)
                } else {
                    clearInterval(interval)
                    done = true;
                    entry.target.innerText = (number)
                }
            }, 60)
        }
    })
}) 

numberAnimation.observe(document.querySelector('.animate-number'))