import { create } from 'zustand'

const useStore = create((set) => ({
    autoNumbers: [],
    autoSearch: {
        series1: '',
        number: '',
        series2: '',
        region: ''
    },
    autoFilter: {
        From: 0,
        End: 9999999999999,
        Sort: true
    },
    updateAutoSearch: (newSearch) => set({ autoSearch: newSearch }),
    updateAutoNumbers: (newNumbers) => set({ autoNumbers: newNumbers }),
    updateAutoFilter: (newFilter) => set({ autoFilter: newFilter }),

}))

export default useStore