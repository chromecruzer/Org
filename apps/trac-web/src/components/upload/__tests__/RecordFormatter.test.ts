import CustomerRecordFormatter from "../CustomerRecordFormatter";

describe('CustomerRecordFormatter', () => {
  let records, modifies;
  beforeEach(() => {
    records = [
      {
        uuid: 'uuid1',
        customer_code: 'customer code',
        name: 'James Tiberius Kirk',
        dea_number: 'DEA 1222',
        hin_number: 'HIM 23333',
        address: '100 Nebraska Way',
        city: 'Metropolis',
        state: 'Nebraska',
        postal: '23245',
        primary_territory: 'Midwest',
        primary_name: 'Larry William Summers',
        key_account_territory: 'Big 8',
        key_account_executive: 'Brian Bedford',
        secondary_territory: 'Arkansa Valley',
        secondary_name: 'Dorothy Bigwind',
        vrs_territory: 'NeverLand',
        vrs_name: 'Peter Pan',
        cos_territory: 'Shangri Pie',
        cos_name: 'Pascal Pythagoras',
        regional_territory: 'Oceana',
        regional_territory_manager_name: 'Tom Sawyer',
        rdb_temp_rdb: 'RDB TEMP I',
        rdb_temp_asd: 'RDB ASD I',
        rdb_temp_1_rdb: 'RDB TEMP 1',
        rdb_temp_1_asd: 'RDB TEMP 2',
        zipcode: '11111',
      },
      {
        uuid: 'uuid2',
        customer_code: 'customer code1',
        name: 'Spock',
        address: '100 Vulcan Path',
        city: 'Pom Far',
        state: 'Starlight',
        postal: '33333',
        primary_territory: 'EAST',
        primary_name: 'Betty Winters',
        key_account_territory: 'Cluster 15',
        key_account_executive: 'Brianna Tablecrossing',
        secondary_territory: 'Starview Valley',
        secondary_name: 'Don LittleBreeze',
        vrs_territory: 'SometimesCountry',
        vrs_name: 'Paul Piglet',
        cos_territory: 'Hong Fang',
        cos_name: 'Julius Shakespeare',
        regional_territory: 'Globe',
        regional_territory_manager_name: 'Huck Finn',
        rdb_temp_rdb: 'RDB TEMP II',
        rdb_temp_asd: 'RDB ASD II',
        rdb_temp_1_rdb: 'RDB TEMP 3',
        rdb_temp_1_asd: 'RDB TEMP 4',
        zipcode: '77777',
      },
    ];
    modifies = [
      {
        original: {
          uuid: 'uuid1',
          customer_code: 'customer code',
          name: 'James Tiberius Kirk',
          dea_number: 'DEA 1222',
          hin_number: 'HIM 23333',
          address: '100 Nebraska Way',
          city: 'Metropolis',
          state: 'Nebraska',
          postal: '23245',
          primary_territory: 'Midwest',
          primary_name: 'Larry William Summers',
          key_account_territory: 'Big 8',
          key_account_executive: 'Brian Bedford',
          secondary_territory: 'Arkansa Valley',
          secondary_name: 'Dorothy Bigwind',
          vrs_territory: 'NeverLand',
          vrs_name: 'Peter Pan',
          cos_territory: 'Shangri Pie',
          cos_name: 'Pascal Pythagoras',
          regional_territory: 'Oceana',
          regional_territory_manager_name: 'Tom Sawyer',
          rdb_temp_rdb: 'RDB TEMP I',
          rdb_temp_asd: 'RDB ASD I',
          rdb_temp_1_rdb: 'RDB TEMP 1',
          rdb_temp_1_asd: 'RDB TEMP 2',
          zipcode: '11111',
        },
        update: {
          uuid: 'uuid1',
          customer_code: 'customer code',
          name: 'James Tiberius Kirk',
          dea_number: 'DEA 1222',
          hin_number: 'HIM 23333',
          address: '100 Nebraska Way',
          city: 'Metropolis',
          state: 'Nebraska',
          postal: '23245',
          primary_territory: 'Midwest',
          primary_name: 'Larry Wally Summers',
          key_account_territory: 'Big 8',
          key_account_executive: 'Brian Bedford',
          secondary_territory: 'Arkansa Valley',
          secondary_name: 'Dorothy Bigwind',
          vrs_territory: 'NeverLand',
          vrs_name: 'Peter Pan',
          cos_territory: 'Shanghi Pie',
          cos_name: 'Pascal Pythagoras',
          regional_territory: 'Oceana',
          regional_territory_manager_name: 'Tom Sawyer',
          rdb_temp_rdb: 'RDB TEMP I',
          rdb_temp_asd: 'RDB ASD I',
          rdb_temp_1_rdb: 'RDB TEMP 1',
          rdb_temp_1_asd: 'RDB TEMP 2',
          zipcode: '11311',
        },
      },
      {
        original: {
          uuid: 'uuid2',
          customer_code: 'customer code1',
          name: 'Spock',
          address: '100 Vulcan Path',
          city: 'Pom Far',
          state: 'Starlight',
          postal: '33333',
          primary_territory: 'EAST',
          primary_name: 'Betty Winters',
          key_account_territory: 'Cluster 15',
          key_account_executive: 'Brianna Tablecrossing',
          secondary_territory: 'Starview Valley',
          secondary_name: 'Don LittleBreeze',
          vrs_territory: 'SometimesCountry',
          vrs_name: 'Paul Piglet',
          cos_territory: 'Hong Fang',
          cos_name: 'Julius Shakespeare',
          regional_territory: 'Globe',
          regional_territory_manager_name: 'Huck Finn',
          rdb_temp_rdb: 'RDB TEMP II',
          rdb_temp_asd: 'RDB ASD II',
          rdb_temp_1_rdb: 'RDB TEMP 3',
          rdb_temp_1_asd: 'RDB TEMP 4',
          zipcode: '77777',
        },
        update: {
          uuid: 'uuid2',
          customer_code: 'customer code1',
          name: 'Worf',
          address: '100 Kapla Path',
          city: 'Pom Far',
          state: 'Starlight',
          postal: '33333',
          primary_territory: 'EAST',
          primary_name: 'Betty Winters',
          key_account_territory: 'Cluster 15',
          key_account_executive: 'Brianna Tablecrossing',
          secondary_territory: 'Starview Valley',
          secondary_name: 'Don LittleBreeze',
          vrs_territory: 'SometimesCountry',
          vrs_name: 'Paul Sabertooth',
          cos_territory: 'Hong Fang',
          cos_name: 'Julius Shakespeare',
          regional_territory: 'Globe',
          regional_territory_manager_name: 'Huck Finn',
          rdb_temp_rdb: 'RDB TEMP II',
          rdb_temp_asd: 'RDB ASD II',
          rdb_temp_1_rdb: 'RDB TEMP 3',
          rdb_temp_1_asd: 'RDB TEMP 4',
          zipcode: '77777',
        },
      },
    ];
  });
  describe('#recordsToTableData', () => {
    it('should convert add comparisons to a list of table records correctly', () => {
      const formatter = new CustomerRecordFormatter({
        adds: records,
        removes: [],
        modifies: [],
      });
      expect(formatter.formattedRecords).toMatchSnapshot();
    });
    it('should convert remove comparisons to a list of table records correctly', () => {
      const formatter = new CustomerRecordFormatter({
        adds: [],
        removes: records,
        modifies: [],
      });
      expect(formatter.formattedRecords).toMatchSnapshot();

    });
    it('should convert modify comparisons to a list of table records correctly', () => {
      const formatter = new CustomerRecordFormatter({
        adds: records,
        removes: [],
        modifies,
      });
      expect(formatter.formattedRecords).toMatchSnapshot();
    });
  });
});
