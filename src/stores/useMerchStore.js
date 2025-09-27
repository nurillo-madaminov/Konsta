import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useMerchStore = defineStore('merch', {
  state: () => ({
    merch: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchMerch() {
      this.loading = true
      this.error = null
      try {
        if (this.merch.length) return
        const { data, error } = await supabase.from('merch').select('*')

        if (error) throw error
        this.merch = data
        await  console.log(data)
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})
