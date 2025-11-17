import type { SerializedUploadNode, DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type LexicalData = DefaultTypedEditorState<SerializedUploadNode>

const lexicalImage = {
  root: {
    children: [
      {
        type: 'upload',
        version: 3,
        format: '',
        id: '691b3e623bc98b861ae33f82',
        fields: null,
        relationTo: 'media',
        value: '691b3e620a58cda26bb6f520',
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
} as LexicalData
