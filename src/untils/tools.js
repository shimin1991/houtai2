import lazyLoading from './lazyLoading.js'
const generateRoutes = (menus) => {
    if(!menus){
        return
    }
  menus.forEach(item => {
    if (item.meta.url) {
        item['component'] = lazyLoading(item.meta.url)
     
      if (item.children && item.children.length) {
         
         generateRoutes(item.children)
      }
     
    }
  })

}
export default generateRoutes