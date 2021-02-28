/**
 * Storage
 * @type {string}
 */
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem (key, value, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    }else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  getItem (key, module_name) {
    if (module_name) {
      const value = this.getItem(module_name)
      if (value) return value[key]
    }
    this.getStorage()[key]
  },
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || {}))
  },
  clearItem (key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    this.setItem(val)
  }
}
