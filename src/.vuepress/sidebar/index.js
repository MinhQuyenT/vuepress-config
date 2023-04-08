const about = require('./01.about')
const learnConcept = require('./02.concept')
const learnSoftwareDevelopment = require('./03.software-development')
const docs = require('./docs')

module.exports = {
  '/about/': about,
  '/docs/': docs,
  '/learn/build-product/': learnConcept,
  '/learn/software-development/': learnSoftwareDevelopment,
  '/learn/devops/': learnConcept,
  '/learn/cloud-computing/': learnConcept,
  '/learn/concept/': learnConcept,
}