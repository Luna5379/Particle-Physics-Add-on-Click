const G = 6.67e-11
const SCALE = 0.001
let particles = []

function setup () {
  createCanvas(400, 400)

 for (let i = 0; i < 10; i++) {
    particles.push(createParticle())
  }
}

function draw () {
  background(51, 51, 51)

  for (const particleA of particles)
    for (const particleB of particles)
      if (particleA !== particleB) particleA.physics(particleB)

  for (const particle of particles) {
    particle.update()
    particle.draw()
  }
}

function mousePressed () {
  particles.push(createParticle(createVector(mouseX, mouseY)))
}

function createParticle (pos) {
  let x = pos?.x || random(0, width)
  let y = pos?.y || random(0, height)
  let mass = random(2e8, 1e9)

  return new Particle(x, y, mass)
}
