<template>
  <div 
  v-loading="isLoading"
  :element-loading-text="elementLoadingText"
  :element-loading-spinner="elementLoadingSpinner"
  :element-loading-background="elementLoadingBackground"
  :element-loading-svg="elementLoadingSvg"
  :element-loading-svg-view-box="elementLoadingSvgViewBox"
  v-bind="$attrs"
  >
    <el-table :data="tableData"  @row-click="rowClick">
      <template v-for="(item, index) in tableOption" :key="index">
        <el-table-column 
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align">
          <template #default="scope">
            <template v-if="scope.row.rowEdit">
              <el-input size="small" v-model="scope.row[item.prop]"></el-input>
            </template>
            <template v-else>
              <template v-if="(scope.$index + scope.column.id) === currentEdit">
                <div style="display: flex;align-items: center;">
                  <div>
                    <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                  </div>
                  <div @click.stop="cancelRow">
                    <slot name="cellEdit" v-if="$slots.cellEdit" :scope="scope"></slot>
                    <div v-else class="action-icon">
                      <el-icon-check class="check" @click.stop="check(scope)"></el-icon-check>
                      <el-icon-close class="close" @click.stop="close(scope)"></el-icon-close>
                    </div>
                  </div>
                </div>
              </template>
              <template v-else class="edit-box">
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                <span v-else>{{scope.row[item.prop]}}</span>
                <component :is="`el-icon-${toLine(editIcon)}`" @click.stop="edit(scope)"></component>
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
      <el-table-column 
        :label="actionOption.label"
        :width="actionOption.width"
        :align="actionOption.align">
        <template #default="scope">
          <slot v-if="scope.row.rowEdit" name="editRow" :scope="scope"></slot>
          <slot v-else name="action" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="pagination" class="pagination" :style="{justifyContent}">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { AnyKindOfDictionary } from 'lodash'
import { ref,PropType, computed,watch, onMounted } from 'vue'
import { TableOptions } from './types'
import { toLine } from '../../utils/index'
import cloneDeep from 'lodash/cloneDeep'

const props = defineProps({
  // ??????????????????
  options: {
    type: Array as PropType<TableOptions[]>,
    required:true
  },
  // ????????????
  data: {
    type: Array,
    required:true
  },
  // ????????????
  elementLoadingText: {
    type: String,
  },
  // ???????????????
  elementLoadingSpinner: {
    type: String,
  },
  // ??????????????????
  elementLoadingBackground: {
    type: String,
  },
  // ???????????????svg
  elementLoadingSvg: {
    type: String
  },
  // ????????????svg?????????
  elementLoadingSvgViewBox: {
    type: String,
  },
  // ?????????????????????
  editIcon: {
    type: String,
    default: 'Edit'
  },
  // ?????????????????????
  isEditRow: {
    type: Boolean,
    default: false
  },
  // ????????????????????????
  editRowIndex: {
    type: String,
    default: ''
  },
  // ??????????????????
  pagination: {
    type: Boolean,
    default: false
  },
  // ???????????????????????????
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  // ??????????????????
  currentPage: {
    type: Number,
    default: 1
  },
  // ???????????????????????????
  pageSize: {
    type: Number,
    default: 10
  },
  // ????????????????????????????????????
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40]
  },
  // ???????????????
  total: {
    type: Number,
    default: 0
  }
})

let emits = defineEmits(['confirm', 'cancel','update:editRowIndex','size-change','current-change'])

// ???????????????????????????
const tableData = ref<any[]>(cloneDeep(props.data))

// ???????????????????????????
let cloneEditRowIndex = ref<string>(props.editRowIndex)

// ????????????????????????????????????
let currentEdit = ref<string>('')

// ??????????????????????????????
const tableOption = computed(()=>props.options.filter(item=>!item.action))
// ?????????
const actionOption:any = computed(() => props.options.find(item => item.action))

// ???????????????????????????
let justifyContent = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'right') return 'flex-end'
  else return 'center'
})

// ??????????????????
const isLoading = computed(()=>!props.data || !props.data.length)


const edit = (scope:any) => {
  currentEdit.value = scope.$index + scope.column.id
} 

const cancelRow = () => { 
  currentEdit.value = ''
}

// ??????????????????
const rowClick = (row:any,column:any) => { 
  console.log(actionOption.value)
  
  if (column.label === actionOption.value.label!) { 
    console.log(123)
    if (props.isEditRow && props.editRowIndex === cloneEditRowIndex.value) { 
      row.rowEdit = !row.rowEdit

      tableData.value.map(item => { 
        if (item !== row) { 
          item.rowEdit = false
        }
      })

      if (!row.rowEdit) { 
        emits('update:editRowIndex','')
      }
    }
  }
}


// ????????????
let check = (scope: any) => {
  emits('confirm', scope)
  // currentEdit.value = ''
}
// ????????????
let close = (scope: any) => {
  emits('cancel', scope)
  // currentEdit.value = ''
}

// ??????????????????????????????
let handleSizeChange = (val: number) => {
  emits('size-change', val)
  // console.log(val)
}
// ??????????????????
let handleCurrentChange = (val: number) => {
  emits('current-change', val)
  // console.log(val)
}


watch(() => props.data, val => { 
  tableData.value = cloneDeep(val)
  tableData.value.map(item => { 
    item.rowEdit = false
  })
}, { deep: true })

watch(() => props.editRowIndex, val => { 
  if (val) { 
    cloneEditRowIndex.value = cloneDeep(val)
  }
})

onMounted(() => { 
  tableData.value.map(item => { 
    item.rowEdit = false
  })
})

</script>
<style lang="scss" scoped>
// .edit-box{
  
// }
svg{
    width: 1em;
    height: 1em;
    // position: relative;
    // top: 2px;
    // left: 12px;
    cursor: pointer;
  }
  
.action-icon {
  display: flex;
  svg {
    width: 1em;
    height: 1em;
    margin-left: 8px;
    // position: relative;
    // top: 8px;
    cursor: pointer;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
    
  }
}

.pagination {
  margin-top: 16px;
  display: flex;
}
</style>
