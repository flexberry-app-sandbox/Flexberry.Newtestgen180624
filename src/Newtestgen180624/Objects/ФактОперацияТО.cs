﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataLine.Newtestgen180624
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Факт операция ТО.
    /// </summary>
    // *** Start programmer edit section *** (ФактОперацияТО CustomAttributes)

    // *** End programmer edit section *** (ФактОперацияТО CustomAttributes)
    [PublishName("FactOperationOfTheMaintenance")]
    [ClassStorage("FactOperationOfTheMaintenance")]
    [AutoAltered()]
    [Caption("Фактическая операция ТО")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФактОперацияТОE", new string[] {
            "ДатаВыполнения as \'Дата выполнения\'",
            "Успешно as \'Успешно\'",
            "ОперацияТО as \'Операция ТО\'",
            "ОперацияТО.Наименование as \'Наименование\'",
            "ПланОперацияТО as \'План операция ТО\'",
            "ПланОперацияТО.ДатаВыполнения as \'Дата выполнения\'"}, Hidden=new string[] {
            "ОперацияТО.Наименование",
            "ПланОперацияТО.ДатаВыполнения"})]
    [MasterViewDefineAttribute("ФактОперацияТОE", "ОперацияТО", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ФактОперацияТОE", "ПланОперацияТО", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ДатаВыполнения")]
    public class ФактОперацияТО : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаВыполнения;
        
        private bool fУспешно = false;
        
        private DataLine.Newtestgen180624.ПланОперацияТО fПланОперацияТО;
        
        private DataLine.Newtestgen180624.ОперацияТО fОперацияТО;
        
        private DataLine.Newtestgen180624.ФактТО fФактТО;
        
        // *** Start programmer edit section *** (ФактОперацияТО CustomMembers)

        // *** End programmer edit section *** (ФактОперацияТО CustomMembers)

        
        /// <summary>
        /// ДатаВыполнения.
        /// </summary>
        // *** Start programmer edit section *** (ФактОперацияТО.ДатаВыполнения CustomAttributes)

        // *** End programmer edit section *** (ФактОперацияТО.ДатаВыполнения CustomAttributes)
        [PropertyStorage("ExecutionDate")]
        [PublishName("ExecutionDate")]
        [NotNull()]
        public virtual System.DateTime ДатаВыполнения
        {
            get
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ДатаВыполнения Get start)

                // *** End programmer edit section *** (ФактОперацияТО.ДатаВыполнения Get start)
                System.DateTime result = this.fДатаВыполнения;
                // *** Start programmer edit section *** (ФактОперацияТО.ДатаВыполнения Get end)

                // *** End programmer edit section *** (ФактОперацияТО.ДатаВыполнения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ДатаВыполнения Set start)

                // *** End programmer edit section *** (ФактОперацияТО.ДатаВыполнения Set start)
                this.fДатаВыполнения = value;
                // *** Start programmer edit section *** (ФактОперацияТО.ДатаВыполнения Set end)

                // *** End programmer edit section *** (ФактОперацияТО.ДатаВыполнения Set end)
            }
        }
        
        /// <summary>
        /// Успешно.
        /// </summary>
        // *** Start programmer edit section *** (ФактОперацияТО.Успешно CustomAttributes)

        // *** End programmer edit section *** (ФактОперацияТО.Успешно CustomAttributes)
        [PropertyStorage("Successfully")]
        [PublishName("Successfully")]
        [NotNull()]
        public virtual bool Успешно
        {
            get
            {
                // *** Start programmer edit section *** (ФактОперацияТО.Успешно Get start)

                // *** End programmer edit section *** (ФактОперацияТО.Успешно Get start)
                bool result = this.fУспешно;
                // *** Start programmer edit section *** (ФактОперацияТО.Успешно Get end)

                // *** End programmer edit section *** (ФактОперацияТО.Успешно Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФактОперацияТО.Успешно Set start)

                // *** End programmer edit section *** (ФактОперацияТО.Успешно Set start)
                this.fУспешно = value;
                // *** Start programmer edit section *** (ФактОперацияТО.Успешно Set end)

                // *** End programmer edit section *** (ФактОперацияТО.Успешно Set end)
            }
        }
        
        /// <summary>
        /// Факт операция ТО.
        /// </summary>
        // *** Start programmer edit section *** (ФактОперацияТО.ОперацияТО CustomAttributes)

        // *** End programmer edit section *** (ФактОперацияТО.ОперацияТО CustomAttributes)
        [PropertyStorage(new string[] {
                "MaintenanceOperation"})]
        [PublishName("MaintenanceOperation")]
        [NotNull()]
        public virtual DataLine.Newtestgen180624.ОперацияТО ОперацияТО
        {
            get
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ОперацияТО Get start)

                // *** End programmer edit section *** (ФактОперацияТО.ОперацияТО Get start)
                DataLine.Newtestgen180624.ОперацияТО result = this.fОперацияТО;
                // *** Start programmer edit section *** (ФактОперацияТО.ОперацияТО Get end)

                // *** End programmer edit section *** (ФактОперацияТО.ОперацияТО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ОперацияТО Set start)

                // *** End programmer edit section *** (ФактОперацияТО.ОперацияТО Set start)
                this.fОперацияТО = value;
                // *** Start programmer edit section *** (ФактОперацияТО.ОперацияТО Set end)

                // *** End programmer edit section *** (ФактОперацияТО.ОперацияТО Set end)
            }
        }
        
        /// <summary>
        /// Факт операция ТО.
        /// </summary>
        // *** Start programmer edit section *** (ФактОперацияТО.ПланОперацияТО CustomAttributes)

        // *** End programmer edit section *** (ФактОперацияТО.ПланОперацияТО CustomAttributes)
        [PropertyStorage(new string[] {
                "ScheduledMaintenanceOperation"})]
        [PublishName("ScheduledMaintenanceOperation")]
        public virtual DataLine.Newtestgen180624.ПланОперацияТО ПланОперацияТО
        {
            get
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ПланОперацияТО Get start)

                // *** End programmer edit section *** (ФактОперацияТО.ПланОперацияТО Get start)
                DataLine.Newtestgen180624.ПланОперацияТО result = this.fПланОперацияТО;
                // *** Start programmer edit section *** (ФактОперацияТО.ПланОперацияТО Get end)

                // *** End programmer edit section *** (ФактОперацияТО.ПланОперацияТО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ПланОперацияТО Set start)

                // *** End programmer edit section *** (ФактОперацияТО.ПланОперацияТО Set start)
                this.fПланОперацияТО = value;
                // *** Start programmer edit section *** (ФактОперацияТО.ПланОперацияТО Set end)

                // *** End programmer edit section *** (ФактОперацияТО.ПланОперацияТО Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку DataLine.Newtestgen180624.ФактТО.
        /// </summary>
        // *** Start programmer edit section *** (ФактОперацияТО.ФактТО CustomAttributes)

        // *** End programmer edit section *** (ФактОперацияТО.ФактТО CustomAttributes)
        [Agregator()]
        [PublishName("FactOfTheMaintenance")]
        [NotNull()]
        [PropertyStorage(new string[] {
                "FactOfTheMaintenance"})]
        public virtual DataLine.Newtestgen180624.ФактТО ФактТО
        {
            get
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ФактТО Get start)

                // *** End programmer edit section *** (ФактОперацияТО.ФактТО Get start)
                DataLine.Newtestgen180624.ФактТО result = this.fФактТО;
                // *** Start programmer edit section *** (ФактОперацияТО.ФактТО Get end)

                // *** End programmer edit section *** (ФактОперацияТО.ФактТО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФактОперацияТО.ФактТО Set start)

                // *** End programmer edit section *** (ФактОперацияТО.ФактТО Set start)
                this.fФактТО = value;
                // *** Start programmer edit section *** (ФактОперацияТО.ФактТО Set end)

                // *** End programmer edit section *** (ФактОперацияТО.ФактТО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФактОперацияТОE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФактОперацияТОE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФактОперацияТОE", typeof(DataLine.Newtestgen180624.ФактОперацияТО));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ФактОперацияТО.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfФактОперацияТО CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfФактОперацияТО CustomAttributes)
    public class DetailArrayOfФактОперацияТО : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (DataLine.Newtestgen180624.DetailArrayOfФактОперацияТО members)

        // *** End programmer edit section *** (DataLine.Newtestgen180624.DetailArrayOfФактОперацияТО members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ФактОперацияТО by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ФактОперацияТО.
        /// </summary>
        public DetailArrayOfФактОперацияТО(DataLine.Newtestgen180624.ФактТО fФактТО) : 
                base(typeof(ФактОперацияТО), ((ICSSoft.STORMNET.DataObject)(fФактТО)))
        {
        }
        
        public DataLine.Newtestgen180624.ФактОперацияТО this[int index]
        {
            get
            {
                return ((DataLine.Newtestgen180624.ФактОперацияТО)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(DataLine.Newtestgen180624.ФактОперацияТО dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
