# Error_log
## Installation
###### Requirements
- MySQL 5.6 ( not less than 5.6 **important!** )
- MySQL 5.6 JBDC driver for ColdFusion ( included in this package  )
- ColdFusion Server

###### Installation steps
1. Install ColdFusion Server with developer edition option ( if you haven't done it yet  )
2. Install MySQL 5.6 JBDC driver for ColdFusion
3. Create DSN for MySQL 5.6 in ColdFusion Admin panel
4. Put my_apps dir into wwwroot
5. Change DSN settings in /my_apps/error_log/config/settings.cfm
6. Access the application at cfserveraddr/my_apps/error_log/ ( for example http://127.0.0.1:8500/my_apps/error_log/ )

## Something that you may need
- **error_log/DB** - Create database script
- **error_log/devtools/pages** - js and style sources
