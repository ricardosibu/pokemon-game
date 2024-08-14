<template>
  <div class="flex flex-col gap-2 w-1/6">
    <button
      class="h-12 rounded-md bg-[#ffcc00] text-white mt-3 capitalize hover:bg-[#0070ba] disabled:bg-gray-300"
      v-for="{ id, name } in options"
      :key="id"
      @click="$emit('selectedOption', +id)"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces'

interface Props {
  options: Pokemon[]
  blockSelection: boolean
}

defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
</script>
