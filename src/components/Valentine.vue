<template>
    <div class="valentine">

    <section class="valentine-section valentine-hidden">
        <h1>Te amo Noemí</h1>
    </section>

    <section class="valentine-section valentine-hidden">
        <h2>I love you...</h2>
        <p>I'm so blessed to spend each day with you.</p>
        <p>You brighten my days,</p>
        <p>with your shining smile.</p>
    </section>

    <section class="valentine-section valentine-hidden">
        <h2>I miss you...</h2>
        <p>I wanna be next to you each day.</p>
        <p>To shrink the distance between us!</p>
    </section>
    
    <section class="valentine-section valentine-hidden">
        <h2>I enjoy all our moments together!!</h2>
        <div class="logos">
            <div class="logo valentine-hidden">
                <img :src="images.uno" class="valentine-img">
            </div>
            <div class="logo valentine-hidden">
                <img :src="images.dos" class="valentine-img">
            </div>
            <div class="logo valentine-hidden">
                <img :src="images.tres" class="valentine-img">
            </div>
            <div class="logo valentine-hidden">
                <img :src="images.cuatro" class="valentine-img">
            </div>
        </div>
    </section>

    <section class="valentine-section valentine-hidden">
        <h2>Let's spend many more!</h2>
    </section>

    </div>
</template>

<script>
export default {
    name: 'valentine',
    data() {
    return {
        images: {
            uno: require('@/assets/photos/1-3.jpg'),
            dos: require('@/assets/photos/2-3.jpg'),
            tres: require('@/assets/photos/3-3.jpg'),
            cuatro: require('@/assets/photos/4-3.jpg')
        }
    }
},
    mounted() {
        const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('valentine-show');
        } else {
            entry.target.classList.remove('valentine-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.valentine-hidden');
hiddenElements.forEach((el) => observer.observe(el));

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
.valentine {
    background-color: #dcabe6;
    color: #721165;
    font-family: 'Zeyada', cursive;
    padding: 0;
    margin: 0;
}

.valentine-section {
    font-size: xx-large;
    display: grid;
    place-items: center;
    align-content: center;
    min-height: 120vh;
}

.valentine-hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 1.3s;
}

.valentine-show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
}

.valentine-img {
    float: left;
    width:  220px;
    height: 220px;
    object-fit: cover;
    padding: 10px 10px 10px 10px;
}

.logos {
    display: flex;
    
}

.logo:nth-child(2) {
    transition-delay: 200ms;
}

.logo:nth-child(3) {
    transition-delay: 400ms;
}

.logo:nth-child(4) {
    transition-delay: 600ms;
}

@media(prefers-reduced-motion) {
    .hidden {
        transition: none;
    }
}</style>