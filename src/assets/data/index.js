import CoverMichova from '../images/models/pmichova.jpg'
import CoverTaylor from '../images/models/jtaylor.jpg'

export const pages = {
  main: {
    title: 'Welcome to Bubble Gun',
    description: 'Along the way, we are go…',
    sections: {
      profiles: {
        title: 'Actors'
      }
    } 
  }
}

export const profiles = {
  'title': 'Actors List',
  'profiles': [{
      id: 'jtaylor',
      name: 'Jaclyn Taylor',
      photo: CoverTaylor
    },
    {
      id: 'pmichova',
      name: 'Patty Michova',
      photo: CoverMichova
    }
  ]
}

export const links = [{
    title: 'Jaclyn Taylor',
    href: 'http://www.brazzers.com/profile/view/id/2383/jaclyn-taylor',
    assigned: 'jtaylor'
  },
  {
    title: 'Patty Michova',
    href: 'http://www.brazzersnetwork.com/profile/view/id/2678/patty-michova',
    assigned: 'pmichova'
  },
  {
    title: 'Patty Michova - Busty Babe Masturbate',
    href: 'http://www.hqsluts.com/Patty+Michova+-+Busty+Babe+Masturbate-369881',
    assigned: 'pmichova'
  }
]

export const getProfiles = () => {
  return profiles.map((profile) => {
    let assigned_links = links.filter((link) => profile.id === link.assigned)
    let href = assigned_links.length < 1 ? null : assigned_links[0].href;
    return { ...profile, href, count: assigned_links.length }
  })
}