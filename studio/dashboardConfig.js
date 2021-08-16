export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '611a0000eb78e87aed7dd7ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-6b84mdha',
                  apiId: '922f46aa-6f14-4a42-a022-bbc28b702026'
                },
                {
                  buildHookId: '611a00008c6821668e59f46f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-g3p1wjys',
                  apiId: '11832a4b-25c4-4484-85c3-d58a52fae8e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RajdeepKakkar/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-g3p1wjys.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
