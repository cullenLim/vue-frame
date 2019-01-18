export function _load(file) {
	return () =>
		import ('@/components/' + file + '.vue');
}