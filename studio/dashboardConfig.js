export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebbbbae95b7c40b9c592e39',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nqicdhjb',
                  apiId: '3e005f7e-b9b6-4936-a4c2-d5409539736b'
                },
                {
                  buildHookId: '5ebbbbafb909243f8d3d2d3d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4imx5bwd',
                  apiId: '3c6f9f8b-737f-4b53-80d4-5f4e215a52d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mettema/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4imx5bwd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
