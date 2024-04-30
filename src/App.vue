<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="https://i.ibb.co/mD79P0r/image.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      </a>
      <a class="navbar-brand">
        활성화/비활성화
      </a>
      <a class="navbar-brand">
        Private IP
      </a>
      <a class="navbar-brand">
        Public IP
      </a>
    </div>
  </nav>

   <!-- 데이터 개수에 따라 다른 그림 표시 -->
    <div v-if="cars.length === 1">
      <img :src="getImageForOneCar()" alt="Car Image">
    </div>
    <div v-else-if="cars.length === 2">
      <img :src="getImageForTwoCars()" alt="Car Image">
    </div>
    <div v-else-if="cars.length === 3">
      <img :src="getImageForThreeCars()" alt="Car Image">
    </div>
    <!-- 데이터 개수가 더 많을 경우에도 같은 방식으로 추가 가능 -->
    <!-- 나머지 경우에 대한 처리 -->
    <div v-else>
      <img src="default_image_url.jpg" alt="Default Image">
    </div>

  <div>
    <DataTable :value="cars" stripedRows class="custom-datatable">
      <Column field="brand" header="Brand" sortable style="width: 25%"></Column>
      <Column field="year" header="Year" sortable style="width: 25%"></Column>
      <Column field="color" header="Color" sortable style="width: 25%"></Column>
    </DataTable>
  </div>
  
</template>
 
<!-- <script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  data() {
    return {
      cars: [
        {brand: 'Toyota', year: 2012, color: 'Red'},
        {brand: 'Ford', year: 2014, color: 'Blue'},
        {brand: 'Audi', year: 2018, color: 'Black'}
      ]
    };
  },
  components: {
    DataTable,
    Column
  },
  methods: {
    fetchNewData() {
      // 여기에서 새로운 데이터를 가져오는 API 호출 등을 수행합니다.
      // 이 예시에서는 간단히 새로운 데이터를 생성하여 기존 데이터에 추가합니다.
      const newData = [
        { brand: 'Hyundai', year: 2016, color: 'White' },
        { brand: 'BMW', year: 2019, color: 'Silver' }
      ];
      // 기존 데이터와 새로운 데이터를 병합하여 업데이트합니다.
      this.cars = [...this.cars, ...newData];
    }
  }
};
</script> -->

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios'; // Axios 라이브러리를 임포트

export default {
  data() {
    return {
      cars: [] // 초기에는 빈 배열로 설정
    };
  },
  components: {
    DataTable,
    Column
  },
  mounted() {
    // 컴포넌트가 마운트된 후에 백엔드에서 데이터를 받아옵니다.
    this.fetchDataFromBackend();
  },
  methods: {
    async fetchDataFromBackend() {
      try {
        // Axios를 사용하여 백엔드 API에 GET 요청을 보냅니다.
        const response = await axios.get('/api/cars'); // 백엔드 API의 엔드포인트를 적절히 변경하세요.

        // 응답으로 받은 데이터를 cars 배열에 설정합니다.
        this.cars = response.data;
      } catch (error) {
        // 에러 처리
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<style>
.custom-datatable .p-datatable-tbody > tr > td {
    border-bottom: 1px solid #ccc;
}
</style>