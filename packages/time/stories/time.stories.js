import gqxTime from '../src/time.vue'

export default {
title: 'gqxTime',
component: gqxTime
}

export const Time = _ => ({
components: { gqxTime },
template: `
<div>
  <gqx-time></gqx-time>
</div>
`
})