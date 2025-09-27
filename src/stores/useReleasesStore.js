import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase'

export const useReleasesStore = defineStore('releases', {
  state: () => ({
    releases: [],
    filterType: 'album',
    sortOrder: 'desc',
    loading: false,
    error: null,
    messge: 'hello',
  }),
  getters: {
    filteredReleases: (state) => {
      let list = state.releases

      if (state.filterType !== 'all') {
        list = list.filter((r) => r.release_type === state.filterType)
      }

      return [...list].sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return state.sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      })
    },
  },
  actions: {
    async fetchReleases() {
      if (this.releases.length) return
      this.loading = true
      this.error = null
      try {
        const { data, error } = await supabase.from('releases').select('*')

        if (error) throw error
        this.releases = data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})
