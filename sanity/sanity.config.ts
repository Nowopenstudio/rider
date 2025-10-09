import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './deskStucture'
import {muxInput} from "sanity-plugin-mux-input"
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'rider',
  title: 'The Rider Residences',

  projectId: 'sq3jhg98',
  dataset: 'production',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),muxInput(),colorInput()],

  schema: {
    types: schemaTypes,
  },
})
