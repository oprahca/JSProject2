// the database for student list
const list = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    name: "iboya vat",
    email: "iboya.vat@example.com",
    date: "Joined 07/15/15",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name: "aapo niskanen",
    email: "aapo.niskanen@example.com",
    date: "Joined 06/15/12",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    name: "phillip cox",
    email: "phillip.cox@example.com",
    date: "Joined 09/11/14",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
    name: "zilda moreira",
    email: "zilda.moreira@example.com",
    date: "Joined 07/15/15",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    name: "lilou le gall",
    email: "lilou.le gall@example.com",
    date: "Joined 06/16/13",
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    name: "lucy hall",
    email: "lucy.hall@example.com",
    date: "Joined 09/11/16",
  },
  {
    id: 7,
    avatar: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    name: "mark colin",
    email: "mark.colin@example.com",
    date: "Joined 01/14/14",
  },
  {
    id: 8,
    avatar: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    name: "sara alves",
    email: "sara.alves@example.com",
    date: "Joined 07/19/16",
  },
  {
    id: 9,
    avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    name: "ramon macrae",
    email: "ramon.macrae@example.com",
    date: "Joined 05/13/12",
  },
  {
    id: 10,
    avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    name: "connor taylor",
    email: "connor.taylor@example.com",
    date: "Joined 05/18/14",
  },
  {
    id: 11,
    avatar: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    name: "aymeric morel",
    email: "aymeric.morel@example.com",
    date: "Joined 06/13/13",
  },
  {
    id: 12,
    avatar: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    name: "lorenz otto",
    email: "lorenz.otto@example.com",
    date: "Joined 05/11/14",
  },
  {
    id: 13,
    avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
    name: "karl williamson",
    email: "karl.williamson@example.com",
    date: "Joined 01/12/14",
  },
  {
    id: 14,
    avatar: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    name: "ouassim heering",
    email: "ouassim.heering@example.com",
    date: "Joined 01/18/12",
  },
  {
    id: 15,
    avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    name: "roberto molina",
    email: "roberto.molina@example.com",
    date: "Joined 06/13/15",
  },
  {
    id: 16,
    avatar: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    name: "jordan hubert",
    email: "jordan.hubert@example.com",
    date: "Joined 06/13/15",
  },
  {
    id: 17,
    avatar: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
    name: "melvin baker",
    email: "melvin.baker@example.com",
    date: "Joined 09/18/14",
  },
  {
    id: 18,
    avatar: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
    name: "everett gordon",
    email: "everett.gordon@example.com",
    date: "Joined 06/17/15",
  },
  {
    id: 19,
    avatar: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    name: "aiden ma",
    email: "aiden.ma@example.com",
    date: "Joined 07/18/12",
  },
  {
    id: 20,
    avatar: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
    name: "florent gerard",
    email: "florent.gerard@example.com",
    date: "Joined 02/12/13",
  },
  {
    id: 21,
    avatar: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    name: "amber chen",
    email: "amber.chen@example.com",
    date: "Joined 07/12/12",
  },
  {
    id: 22,
    avatar: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    name: "alexandra davies",
    email: "alexandra.davies@example.com",
    date: "Joined 05/11/13",
  },
  {
    id: 23,
    avatar: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    name: "sergio cole",
    email: "sergio.cole@example.com",
    date: "Joined 02/17/15",
  },
  {
    id: 24,
    avatar: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
    name: "edgar dixon",
    email: ">edgar.dixon@example.com",
    date: ">Joined 06/17/11",
  },
  {
    id: 25,
    avatar: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
    name: "kirk myers",
    email: "kirk.myers@example.com",
    date: "Joined 09/17/15",
  },
  {
    id: 26,
    avatar: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    name: "ani hesseling",
    email: "ani.hesseling@example.com",
    date: "Joined 08/14/16",
  },
  {
    id: 27,
    avatar: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    name: "victoire bonnet",
    email: "victoire.bonnet@example.com",
    date: "Joined 05/13/16",
  },
  {
    id: 28,
    avatar: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
    name: "marcos morales",
    email: "marcos.morales@example.com",
    date: "Joined 01/12/12",
  },
  {
    id: 29,
    avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name: "nils neumann",
    email: "nils.neumann@example.com",
    date: "Joined 03/11/12",
  },
  {
    id: 30,
    avatar: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
    name: "emily harrison",
    email: "emily.harrison@example.com",
    date: "Joined 07/18/15",
  },
  {
    id: 31,
    avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "matthew fortin",
    email: "matthew.fortin@example.com",
    date: "Joined 03/18/15",
  },
  {
    id: 32,
    avatar: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    name: "charlotte steward",
    email: "charlotte.steward@example.com",
    date: "Joined 02/18/11",
  },
  {
    id: 33,
    avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    name: "marceau rodriguez",
    email: "marceau.rodriguez@example.com",
    date: "Joined 07/13/14",
  },
  {
    id: 34,
    avatar: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    name: "hudson anderson",
    email: "hudson.anderson@example.com",
    date: "Joined 09/12/15",
  },
  {
    id: 35,
    avatar: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    name: "warren phillips",
    email: "warren.phillips@example.com",
    date: "Joined 01/11/12",
  },
  {
    id: 36,
    avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "leo niva",
    email: "leo.niva@example.com",
    date: "Joined 09/14/15",
  },
  {
    id: 37,
    avatar: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    name: "hani prevoo",
    email: "hani.prevoo@example.com",
    date: "Joined 01/11/15",
  },
  {
    id: 38,
    avatar: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    name: "veronica rodriguez",
    email: "veronica.rodriguez@example.com",
    date: "Joined 07/17/12",
  },
  {
    id: 39,
    avatar: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "ginestal das neves",
    email: "ginestal.das neves@example.com",
    date: "Joined 06/19/12",
  },
  {
    id: 40,
    avatar: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    name: "devon barnes",
    email: "devon.barnes@example.com",
    date: "Joined 09/19/14",
  },
];
