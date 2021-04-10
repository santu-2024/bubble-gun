import CoverMichova from '../images/models/pmichova.jpg'
import CoverTaylor from '../images/models/jtaylor.jpg'

const profiles = {
  'title': 'Actors List',
  'profiles': [{
      _id: 'jtaylor',
      name: 'Jaclyn Taylor',
      photo: CoverTaylor
    },
    {
      _id: 'pmichova',
      name: 'Patty Michova',
      photo: CoverMichova
    }
  ]
}

const links = [{
    title: 'Jaclyn Taylor',
    href: 'http://www.brazzers.com/profile/view/id/2383/jaclyn-taylor',
    assigned: 'jtaylor'
  },
  {
    title: 'Patty Michova',
    href: 'http://www.brazzersnetwork.com/profile/view/id/2678/patty-michova',
    assigned: 'pmichova'
  }
]

export const storage = {
  pages: {
    main: {
      title: 'Welcome to Bubble Gun',
      description: 'Along the way, we are go…'
    }
  },
  getProfiles: () => {
    const linked_profiles = profiles['profiles'].map((profile) => {
      let assigned_links = links.filter((link) => profile._id === link.assigned)
      let href = assigned_links.length < 1 ? null : assigned_links[0].href;
      return {
        ...profile,
        href,
        count: assigned_links.length
      }
    })
    return {
      title: profiles.title,
      profiles: linked_profiles
    }
  }
}