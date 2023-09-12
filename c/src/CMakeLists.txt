file(
	GLOB_RECURSE app_src
	"${CMAKE_CURRENT_LIST_DIR}/*.cpp"
)

file(
	GLOB_RECURSE app_test_src
	"${CMAKE_CURRENT_LIST_DIR}/test-*.cpp"
)

message(${app_test_src})

add_executable(tdd ${app_test_src})
target_link_libraries(tdd Catch2::Catch2WithMain)
